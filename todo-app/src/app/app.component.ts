import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  public todoList;
  ngAfterContentInit(){
  this.todoList = [{ color: "red", name: "Immediate" }, { color: "blue", name: "Urgent" }, {color: "green", name: "Normal"}]; 
  }
}
