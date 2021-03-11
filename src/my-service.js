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
class MyService extends PolymerElement {
 //template getter must return an instance of HTMLTemplateElement
//the html helper function makes this easy
  static get template() {
    return html`
    
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
          background-image:url("images/carousel1.jpg") center;
          background-size: cover;
          background-color: rgba(18, 218, 61, 0.473);
          position: relative;
        }
        @media(max-width:1010px){
          
          
          .a1{
            background-image: url(images/carousel1.jpg);
            height:600px;
          }
          
      </style>
     

      <nav-page></nav-page> 
    <!--this is used to the content by using the card-->

      <div class="card">
      <div class="card-content">
     <h1> PLANT DEVELOP AND DESIGN</h1>
      <p>we provide a common place for all kinds of plants to develop which includes arena plants,bamboo varieties,fruit plants,indoor palm and ornamental plants. </p>
      <br>
      we have a wide range of Agro and horticulture products farmed grown in our own farms under proper care by our experts all our products are highly demanded all over the world</p>
    
      </div>
      </div>
      <div class="card">
      <div class="card-content">
      <h1>NURSERY MAINTANCE</h1>
      <p><b>Cleaning:</b> Keeping the nursery or greenhouse clean works well as a defense against plant diseases and insect infestations<br>
      <b> Water services:</b> All newly planted material gets watered as soon as possible.<br>
        For the next three weeks, be very observant, look at new plants daily for signs like wilting, etc.<br>
        Monitor air temperatures, rainfall, soil moisture<br>
        Verfication: Done once in a week<br>
      <b>Security:</b> 24/7 Security and Lock tools away in your garden shed, or indoors if you don't have one. This is important not only to prevent the theft of the tools themselves but also your garden tools can be used to break into your home.<br>
    <b>Electricity:</b>Yes<br>
        we will take the  Plant protection measures 
      </p>
      </div> 
     </div>
    
     <div class="card">
     <div class="card-content">
     <h1>Nursery Work</h1>
             <p>we also provide landscaping services and build green plants we grow our plants with atmost care and deliver them to our clients as per their requirements as our nursery is home wide variety of plants</p>
      </div>
      </div>

     
    </paper-card>
       
      </div>
      
    `;
  }
  
}
//register the element with browser
window.customElements.define('my-service', MyService);