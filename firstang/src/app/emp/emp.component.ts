import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  name;
  age:number;
  email:string;
  salary:number;
  proj:string[];
  address:{'street':String,"city":String}
  hobbies:string[];
  num:string[];
  show:boolean;
  ishow:boolean;
  dtitle:string;
  ititle:string;

  constructor() { }

  ngOnInit() {

    this.name="Arun";
    this.age=28;
    this.salary= 120000;
    this.email='arun@gmail.com';
    this.proj=["Billing Machine", "Billing Software"];
    this.address={"street":"Konikkara","city":"Cherpu"};
    this.num=["Home: 773373666", "MOB:776556777"]
    this.hobbies= ["Reading","Music","Football"];
    this.show= true;
    this.ishow= true;
    this.dtitle="Hide Data";
    this.ititle="Hide Image";

  };

  FShow() {
    this.show=!this.show;
    if(this.show)
      this.dtitle="Hide Data"
    else
      this.dtitle="Show Data"
  }

  IShow() {
    if(this.ishow)
    this.ititle="Hide Image"
    else
    this.ititle="Show Image"
  }



}
