import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

class AppTable extends PolymerElement {
    static get template() {
        return html`
            <table>
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
            </table>
        `;
    }

    _getData(data, column) {
        return data[column.name]
    }
}

customElements.define('app-table', AppTable);