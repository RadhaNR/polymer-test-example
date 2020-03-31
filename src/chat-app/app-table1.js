import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/iron-ajax/iron-ajax.js';

class AppTable extends PolymerElement {
    static get template() {
        return html`
        <iron-ajax
        id="ajax"
        handle-as="json"
        on-response="handleResponse"
        debounce-duration="300">
    </iron-ajax>

    {{firstName}}
    <button on-click="_handleChange" id="btnName">Change Name</button>
    <button on-click="handleAjax" id="load">Load</button>

          <!--  <table>
                <thead>
                    <template is="dom-repeat" items={{columns}}>
                        <td>{{item.value}}</td>
                    </template>
                </thead>
                <tbody>
                    <template is="dom-repeat" items={{rows}} as="data">
                        <tr>
                            <template is="dom-repeat" items={{columns}} as="column">
                                <td>[[_getData(data, column)]]</td>
                            </template>
                        </tr>
                    </template>
                </tbody>
            </table>-->
            <table>
          
                <template is="dom-repeat" items={{list}}>
                     <tr class="list-item">
                        <td>{{item.id}}</td>
                        <td>{{item.title}}</td>
                    </tr>
                </template>
            
            </table>
        `;
    }


    static get properties() {
        return {
            firstName: {
                type: String,
                value: "Radha"
            },
            list: {
                type: Array,
                value: []
            }
        };
    }

    /**
     * 
     * @param {*} data 
     * @param {*} column 
     */
    _getData(data, column) {
        return data[column.name]
    }
    _handleChange() {
        console.log("_handleChange")
        this.firstName = "HCL";
    }
    handleResponse(event) {
        console.log("in handleResponse")
        this.list = event.detail.response;
    }
    handleAjax() {
        console.log("in handleAjax")
        let ajax = this.$.ajax;
        ajax.method = "get";
        ajax.url = "http://localhost:3000/posts";
        ajax.generateRequest();
    }
}

customElements.define('app-table', AppTable);
