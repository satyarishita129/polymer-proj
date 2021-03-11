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
import './edit-profile.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';

class MyView4 extends PolymerElement {
  handleClick()
  {
    if(this.myName == 'rishitha' )
    {
      window.alert('success');
      this.set('route.path','/view2')
    }
    else{
      window.alert('Failed');
    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px 20px;
        }
        .card {
          margin: 24px;
          padding: 16px 10px;
          
        }
        google-map {
          height: 300px;
        }
      </style>
      <app-location route="{{route}}"></app-location>
      <div class="card">
        
        
        <h3>[[myName]]</h3>
        <paper-input always-float-label label="Username" value="{{myName}}"></paper-input>
        <p>Google map</p>   
        <google-map latitude="37.77493" longitude="-122.41942" api-key="1234"></google-map>
        <edit-profile my-name={{myName}}></edit-profile>
        </div>
       
    `;
  }
  

  static get properties() {
    return {
     myName: {
        type: String,
        value: "rishitha",
        //observer: "_pageChanged"    
     }, 
     }
    }
}
window.customElements.define('my-view4', MyView4);
