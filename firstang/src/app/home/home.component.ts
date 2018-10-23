import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name;
  age:number;
  email:string;
  address:{'street':String,"city":String}
  hobbies:string[];


  constructor() { }

  ngOnInit() {

    this.name="Arun";
    this.age=28;
    this.email='arun@gmail.com';
    this.address={"street":"Konikkara","city":"Cherpu"};
    this.hobbies= ["Reading","Music","Football"];

  };

}
