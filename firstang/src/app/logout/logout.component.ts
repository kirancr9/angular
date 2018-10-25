import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  name:string;
  pass:string;
  lstring:string;
  optionSelected:string;

  state:string[];
  
  Display() {
    console.log(this.optionSelected);
    if(this.optionSelected=="KL")
    this.lstring="The Mother Tongue of Kerala is Malayalam";
    else if(this.optionSelected=="KA")
    this.lstring="The Mother Tongue of Karnataka is Kannada";
    else if(this.optionSelected=="TN")
    this.lstring="The Mother Tongue of TamilNadu is Tamil";
    else
    this.lstring="Please select an option";
  }


  constructor() { }

  ngOnInit() {



    this.state=["KL","TN","KA"];
  }

}
