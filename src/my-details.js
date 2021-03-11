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

import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';


import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';

import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/iron-input/iron-input.js';
import './nav-page.js';
class MyDetails extends PolymerElement {
  static get template() {
    return html`
    
    <!-- app-location is an element that provides
   synchronization between the browser location bar and the state of an app.it bind app url-->
   
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

      <style include="shared-styles">
        :host {
          display: block;
          padding:10%;
          
          
          
        }
       

      
 .head h5{
  color:blue;
  text-align:center;


 }
 .head {
  
  width:100%;
  
 }
 .overflow-x:auto{
   width:50%;
   margin:0 auto;
 }
 
  h5{
    text-align:center;
  }
    
  }

  
.thead{
  background:#ddd;
  color:black;
}


#data td, #customers th {
border: 1px solid #ddd;
padding: 8px;
border-style:solid;
}

#customers tr:nth-child(even){
background-color: rgba(18, 218, 61, 0.473);

}

#data tr:hover {
background-color: lightblue;
      }

#data th {
padding-top: 8px;
padding-bottom: 12px;
text-align: left;
color: black;
border-style:solid ;
}

      
      </style>
    
      <link rel = "stylesheet" 
      href = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css">
   <link rel = "stylesheet" 
      href = "https://fonts.googleapis.com/icon?family=Material+Icons">

    <div class="head">
    <h5>Welcome to Nursery.</h5>
   
        
    </div>
    <center>
    <div style="overflow-x:auto;">

    <center>
    <table id="data">
    <thead class="thead"><!-- table-->
       <tr>
         <!---The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows.   ---->
         <th scope="col">Username</th>
         <th scope="col">Password</th>
         <th scope="col">Mobile</th>
         <th scope="col">Address</th>
         <th scope="col">Timings</th>
         <th scope="col">Maintance</th>
        
       </tr>
     </thead>
     
           <tbody>	
   <template is="dom-repeat" items="{{userList}}">
           <tr>
                     <td>{{item.username}}</td>
                     <td>{{item.password}}</td>
                     <td>{{item.mobile}}</td>                     
                     <td>{{item.address}}</td>
                     <td>{{item.timings}}</td>
                     <td>{{item.maintance}}</td>
                     
           </tr>
    
   </template>

          
</tbody>
</table>
</center>

</div>
<div class="back1"> <a href="./register" on-click="back">Back</a></div>
 `;
}

static get properties() {
 return {
    //registerData is property which is taking userList array values from registration.js
   nurseryData:{
     type:Object,
     value:{},
     notify:true
   },
   userList:{
     type:Array,
     value:[],
     notify:true
   }
 };
}


    
}



window.customElements.define('my-details',MyDetails);