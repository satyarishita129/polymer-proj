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
import './nav-page.js';
import '@polymer/paper-card/paper-card.js';
class MyGallery extends PolymerElement {
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
        width: 50%;
        height:85vh;
        object-fit: fill;
        padding-bottom:10px;
      }
      .card {
       
        padding: 10px;
        
        border-radius: 5px;
        background-color: rgba(18, 218, 61, 0.473);
      }
      @media only screen and (max-device-width: 1180px){
        .responsive {
          width: 100%;
          height: auto;
          margin-left:0px;
        }
        .imag{
          width: 100%;
          height:85vh;
          object-fit: fill;
        }
       
      }
      </style>
      <nav-page></nav-page> 
      <!--this is used to the images by using the card-->
      <div class="card">
      <h1><center>Gallery</center></h1>
     
     
     <script src="../webcomponentsjs/webcomponents-lite.js"></script>

      
     <paper-carousel items="1" dotText="false">
  <center>
  <img src="images/darlin.jpg" class="imag"><br>
     <img src="images/plant5.jpg" class="imag" ><br>
     <img src="images/plant4.jpg"class="imag"><br>
     </center>
   </paper-carousel>
   
   

</div>
  
        
     
      
    `;
  }
}

window.customElements.define('my-gallery', MyGallery);