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
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import './nav-page.js';
class MyRegister extends PolymerElement {
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
          box-sizing:border-box;
          padding: 10px; 
          background-color: rgba(18, 218, 61, 0.473);
        }
        .green{
          color:black;
          background-color:lightblue;
        }
       
        .head h1{
          color:blue;
          text-align:center;
        
        
         }
         .head {
          width:100%;
         }
         .card{
        width:50%;
        margin:0 auto;
        box-sizing:border-box;
         }
        
         @media(max-width:480px){
          .card{
            margin-top: 25px;
            margin-bottom:100px;
            padding: 10px;
            color: #757575;
            box-sizing:border-box;
            width:100%;
            border-radius: 5px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
         
           }
           .head{
            text-align:center;
            color:blue;
            box-sizing:border-box;
          }
          .list{
            padding: 12px 12px;
          }
          .log{
            color:blue;
          }
        }
     
        

      </style>
      <nav-page></nav-page> 
    
      <div class="head">
      <center><h1><b>Registration<b><h1></center>
      </div>

      <div class="card">
        
        <paper-input  always-float-label label="Name:"  value="{{username}}"  char-counter pattern="[a-zA-Z]*"></paper-input>
        <paper-input  always-float-label label="Password:"  value="{{password}}"  char-counter pattern="[a-zA-Z]*"></paper-input>
        <paper-input  always-float-label label="Mobile Number:"  value="{{mobile}}"  char-counter maxlength="12" pattern="[0-9]*"  ></paper-input>

        <paper-input  always-float-label label="Address:"  value="{{address}}" char-counte pattern="[a-zA-Z]*"></paper-input>

  
      
        
        <paper-dropdown-menu   value={{timings}} label="Timings">
        <paper-listbox slot="dropdown-content" selected="1" class="list">
        <paper-item>Choose</paper-item><br>
        <paper-item>8AM to 1PM</paper-item><hr>
        <paper-item>2PM to 6PM</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>

      <br>
      <paper-dropdown-menu value={{maintance}} label="Maintance">
      <paper-listbox slot="dropdown-content" selected="1" class="list">
      <paper-item>Choose</paper-item><br>
      <paper-item>Water Service</paper-item><br>
      <paper-item>Security</paper-item><br>
      <paper-item>Verfication</paper-item><br>
      <paper-item>Electricity</paper-item><br>
      <paper-item>Cleanliness</paper-item>

      </paper-listbox>
    </paper-dropdown-menu>

   
        
        <br><br>

        <paper-button toggles raised class="green" on-click="handleClick">register</paper-button>
        <p>Already have an account?      <a href="./login" class="log">LOGIN</a>  </p>


      </div>
       

    `;
	}
	static get properties() {
		return {
			//page property which is used for page navigation
			username: {
				type: String,
				value:'',
			},
			password: {
				type: String,
				value:'',
			},
			mobile: {
				type: Number,
				value:'',
			},
			address: {
				type: String,
				value:'',
			},
            timings: {
				type: String,
				value:'',
			},
            maintance: {
				type: String,
				value:'',
			},

			nurseryData: {
				type: Object,
				value: {},
				notify: true
			},
			userList: {
				type: Array,
				value: [],
				notify: true
			}
     
		};
  }

		handleClick() {
			if (this.username.trim() == '' || this.password.trim() == '' || this.mobile.trim() == '' || this.address.trim() == '') {
				alert('please enter all fields');
        return false;
			}
			this.nurseryData = {
				"username": this.username,
				"password": this.password,
				"mobile": this.mobile,
				"address": this.address,
                 "timings": this.timings,
                 "maintance": this.maintance
       
			}
			//pushing the data into userlist
			this.userList.push(this.nurseryData);
      //modify and added the data
			let users = this.userList.map((username) => {
				return username;
			});
			this.set('userList', users); //setting the users into userlist 
			console.log(this.nurseryData);
      console.log(this.userList);

			//reset input fields
			this.username = '';
			this.password = '';
			this.mobile = '';
			this.address = '';
            this.timings = '';
            this.maintance = '';
		this.set('route.path', '/details'); //route path to plan page
		}


	}

window.customElements.define('my-register', MyRegister);