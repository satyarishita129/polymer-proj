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
import './shared-styles.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
//import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
//import '@polymer/paper-item/paper-item.js';

import '@polymer/paper-listbox/paper-listbox.js';

class MyView2 extends PolymerElement {
  Login(){
    this.set('route.path','/view1')
  }
  handleClick()
  {
    if(this.username == 'rishitha' && this.password == 'rishi')
    {
      window.alert('success');
      this.set('route.path','/view3')
    }
    else{
      window.alert('Failed');
    }
  }
  static get template() {
    return html`
    <div class="card">
     User Name:<paper-input always-float-label label="" value="{{username}}" ></paper-input>
     Password:<paper-input type="password" always-float-label label="password" value="{{password}}" required></paper-input>
    Address:<paper-input type="address" always-float-label label="address" value="{{address}}" required></paper-input><br>
    Gender:
    <paper-radio-group selected="">
        <paper-radio-button name="Male">Male</paper-radio-button>
        <paper-radio-button name="female">Female</paper-radio-button>
      </paper-radio-group><br><br>

    Timings:
    <paper-dropdown-menu label="">
    <paper-listbox slot="dropdown-content" selected="1">
      <paper-item></paper-item>
      <paper-item>Choose</paper-item>
      <paper-item>8Am to 1pm</paper-item>
      <paper-item>2pm to 6pm</paper-item>
     
     
    </paper-listbox>
  </paper-dropdown-menu>
<br>
    <paper-button raised class="indigo" on-click="handleClick">register</paper-button>
    Already have an account? <paper-button raised class="indigo" on-click="Login">login</paper-button>
    </div>
    
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <app-location route="{{route}}"></app-location>

        <template is="dom-if" if="loggedIn">
        <home-component></home-component>
        </template>
        </div>
        <br/>
        <div>[[userName]]</div>
  
    `;
  }
 // handleClick()
 //{
  
  //  this.set('route.path','/view3');
 // }

  register(){

    window.alert("event clicked");
  }
  static get properties() {
    return {
      username: {
        type: String,
        value: 'rishitha',
        observer: "_changeUsername",

       },
      

      password: {
        type: String,
        value: ''
 
    }

  }
  };
   _changeUsername() {
          console.log(this.username);    }
      
}

window.customElements.define('my-view2', MyView2);
