import { Component, OnInit } from '@angular/core';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name:string;
lastname:string;
gender:string;
city:string;
agree:boolean;
arr:number;
onename:string;
num:number;

 //let arr:number[];
 //arr:number[];
  list = new Array();

  constructor() { 

    console.log('hi constructor');
this.onename='onewayname';
this.num=20000;
  }

  ngOnInit(): void {

   this.name='gobal name';
  }

 myfunction() {
alert("fun");
  console.log(this.name);
  console.log(this.lastname);

  console.log(this.gender);

  console.log(this.city);
  console.log(this.agree);

  var Register_Detail=[
    {register_fname:this.name,
      register_lname:this.lastname,
      register_gender:this.gender,
    register_city:this.city,
  register_agree:this.agree}];

this.list.push(Register_Detail);
console.log(this.list);

console.log(Register_Detail[0].register_fname);

//console.log(Register_Detail);
debugger;
 }

}
