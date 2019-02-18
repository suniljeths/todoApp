import { Component, OnInit, Input } from '@angular/core';

@Component ({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
	
	@Input() todoVal;
	public listarray = [];
	constructor() { }

	  ngOnInit() {
	  }

	  public color;
    public name;
    public email;
    public number;
    public salery;
    public len = 0;
onsubmit(response) {

    this.color ="";
    this.name ="";
    this.email ="";
    this.number ="";
    this.salery ="";
    let dataview = {name:response.name,color:response.color, email:response.email, number:response.number, salery:response.salery}; 
    this.listarray.push(dataview);
    this.len =  this.listarray.length; 
}
 
   delfun(i) {  
        this.listarray.splice(i, 1); 
        this.len =  this.listarray.length; 
        
      }
	}


	