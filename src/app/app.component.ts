import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent {
  title = 'schoolmanagement';

  Name:string='';
  testinterpolation="Hi GOBAL";
   myfun() {
    console.log("call function");
  }
  
   onClickMe() {
    
    alert("sucess");
    console.log("sucess function");
    
  } 
  myClickFunction() { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
 }
  
}
function myfun() {
  console.log("call function");
}




