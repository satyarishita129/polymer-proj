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

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-route.js';

class NavPage extends PolymerElement {
  static get template() {
    return html`
      <style>
     
      .nav {
          display: block;  
          padding: 20px;     
          padding-top:11px; 
          background-color: MediumSeaGreen; 
         
        
      }
      .logo{
        position:absolute;
        right:1200px;
     
      }
    
    .nav li {
          display: inline-block; 
          color:white;         
          text-align: center; 
          
    }
    .nav-logo paper-button
        {
          font-size:15px;
        }
   
    
    @media (max-width: 960px) and (min-width: 501px) {
        .nav li { 
          width:90%;
        } /* Show 2 logos per row on medium devices (tablets, phones in landscape) responsive */
    }
    
    @media (max-width: 500px) {
        .nav li {
           width: 100%; 
          } /* On small screens, show one logo per row */
    }
      </style>
      <app-location route="{{route}}"></app-location>
      
            <center>
            
            <img src="../images/logo.png" class="logo" style="width:75px; height:75px;">   
           
                  <ul class="nav">
                    <li>
                    <div class="nav-logo">
                    <paper-button toggles  class="green" on-click="home">Home</paper-button>
                    </div>
                    </li>
                    <li>
                      <div class="nav-logo">
                      <paper-button toggles  class="green" on-click="service">Service</paper-button>
                      </div>
                     
                    </li>
                    <li>
                      <div class="nav-logo">
                      <paper-button toggles  class="green" on-click="gallery">Gallery</paper-button>
                      </div>
                     
                    </li>
                    <li>
                      <div class="nav-logo">
                      <paper-button toggles  class="green" on-click="logout">logout</paper-button
                      </div>
                      
                    </li>
                  </ul>
         
</center>







    `;
  }
  logout(){
    this.set('route.path','/login')
    location.reload();
  }
  service(){
    this.set('route.path','/service')
  }
  gallery(){
    this.set('route.path','/gallery')
  }
  home(){
    this.set('route.path','/home')
  }
  
 
 

}

window.customElements.define('nav-page', NavPage);