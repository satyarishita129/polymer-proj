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
import '@polymer/paper-card/paper-card.js';
import './nav-page.js';
class MyHome extends PolymerElement {
    //template getter must return an instance of HTMLTemplateElement
//the html helper function makes this easy
  static get template() {
    return html`
      <style include="shared-styles">
      :host {
        display: block;
        padding: 10px;
        background-color: rgba(18, 218, 61, 0.473);
      
        background-size: cover;
       
      }
      .imag{
        width: 100%;
        height:85vh;
        margin-left:0px;
      }
      @media only screen and (max-device-width: 1180px){
        .responsive {
          width: 100%;
          height: 85vh;
          margin-left:0px;
        }
        .imag{
          width: 100%;
          height:85vh;
        }
      }
      </style>
     <nav-page></nav-page> 
      <div class="card">
      <h1><center>Nursery</center></h1>
     <img src="../images/plant16.jpg"  class="imag">
     </div>

     <div class="card">
     
     <p>Evergreen nursery is located in BURRILANKA village,Kadiyam Mandal. Andhra Pradesh ,India,our nursery is located about 10km away from Rajahmundry.we are one of the leading produces of all kinds of nursery plants .we provide a common place for all kinds of plants.which include avenue plants,bamboo varieties,fruit plants,indoor,outdoor,palm and ornamental plants. we have got lot of experience in producing,supplying high quality plants in various sizes to our loyal customers.we have emerged as one of the most promising manufactures,exports,trades,suppliers and services provides of a wide range of Agro and horticulture products</p>

    

      
  
        
     
      
    `;
  }
}
//register the element with browser
window.customElements.define('my-home', MyHome);