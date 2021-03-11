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
import '@polymer/iron-form/iron-form.js';

import '@polymer/paper-button/paper-button.js';

import './my-view2.js';
class MyView1 extends PolymerElement {

  handleClick()
  {
    if(this.name == 'rishitha' && this.password == 'rishi')
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
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
          background-color: green;
          background-image: url("https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg");
          background-attachment: fixed;
        }
        .indigo{
          background-color:black;
        }
      </style>
      <app-location route="{{route}}"></app-location>

      <div class="card">
      <h1>Login</h1>
        <iron-form>
      <form method="get" action="/form/handler">
       USER NAME <input type="text" name="name" value="name"><br>
       PASSWORD <input type="text" name="password" value="password">
  


        <input type="checkbox" name="donuts" checked> I confirm<br>
        <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
        <paper-button raised class="indigo" on-click="handleClick">login</paper-button>
       
      </form>
    </iron-form>
   
        </div>
    `;
  }
  //handleClick(){
  //  window.alert("event clicked");
  //}
  
//handleClick(){
  //this.set('route.path','/view2')
  
  //}
}

window.customElements.define('my-view1', MyView1);
