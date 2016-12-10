import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Biner = '';
  Character = '';
  charToBin(char){
    this.Biner = '';
    for (let i in char){
      let j = char[i].charCodeAt(0);
      this.Biner += ('00000000'+j.toString(2)).slice(-8)+ ' ';
    }
  }
  binToChar(bin){
    this.Character = '';
    let binner = bin.split(' ');
    for (let i in binner){
      let j = String.fromCharCode(parseInt(binner[i],2));
      this.Character += j;
    }
  }

}
