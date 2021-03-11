/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
//import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class EditProfile extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px 20px;
        }
        .card {
            margin: 24px;
            padding: 16px;

          }
          .img {
            background-colo
          }
      </style>

    
    
      <div class="card">
        
        <h1>edit page</h1>
        <h3>{{myName}}</h3>
        <paper-input always-float-label label="Username" value="{{myName}}"></paper-input>
       
        </div>
     
        
        
    `;
  }
  

  static get properties() {
    return {
     myName: {
        type: String,
        //observer:"_changeName"
        
      },
}
  }
  
}


window.customElements.define('edit-profile', EditProfile);
