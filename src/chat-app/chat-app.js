import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@em-polymer/google-map/google-map.js';
import '@em-polymer/google-map/google-map-marker.js';
import "./app-table";
/**
 * @customElement
 * @polymer
 */
class ChatApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <app-table columns={{columns}} rows={{rows}}></app-table>
      <!-- <google-map latitude="39.84143133531688" longitude="-117.4895451470561" api-key="1234" id="map"></google-map>-->
      <button on-click="_handleSave">Store Data</button>
      <button on-click="_handleGet">Get Data</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'chat-app'
      },
      columns: {
        type: Array,
        value: [{
          name: "slotId",
          value: "Slot Id"
        }, {
          name: "date",
          value: "Date"
        }, {
          name: "firstName",
          value: "FIrst Name"
        }, {
          name: "lastName",
          value: "last Name"
        }]
      },
      
      rows: {
        type: Array,
        value: [{
          slotId: 1244,
          date: "12/324/354",
          firstName: "HCL",
          lastName: "Tech"
        }, {
          slotId: 1244,
          date: "12/324/354",
          firstName: "HCL",
          lastName: "Tech"
        },
        {
          slotId: 1244,
          date: "12/324/354",
          firstName: "HCL",
          lastName: "Tech"
        },{
          slotId: 1244,
          date: "12/324/354",
          firstName: "HCL",
          lastName: "Tech"
        }]
      }
    };
  }

  _handleSave(){
    console.log("in save")
  }

  _handleGet() {
    console.log("on get")
  }
}

window.customElements.define('chat-app', ChatApp);
