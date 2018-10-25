import { Component, OnInit } from '@angular/core';
import {CalService} from '../cal.service'


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  ansdiv;
  ansmul;
  anssub;
  ansadd:string;
  a:number;
  b:number;


  constructor(private ms:CalService) { }

  ngOnInit() {
  }
  addition()
  {
    this.ansadd= this.ms.add(Number(this.a),Number(this.b));

  }

  multi()
  {
    this.ansmul= this.ms.mul(Number(this.a),Number(this.b));

  }

  subs()
  {
    this.anssub= this.ms.sub(Number(this.a),Number(this.b));

  }
  divs()
  {
    this.ansdiv= this.ms.div(Number(this.a),Number(this.b));

  }


}
