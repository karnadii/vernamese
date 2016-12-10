import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ASCII:any[] = [];
  Plaintext:any;
  Keystream:any;
  Ciphertext:any;
  CipherBin = '';
  CipherHex = '';
  CipherChar = '';
  CipherDec = '';
  CipherOct = '';

  //Error?
  keyErr = false;
  CipErr = false;
  plainErr = false;
  plNkeyErr = false;
  cipNkeyErr = false;

  ngOnInit(){
    // this.getAscii();
  }

  getAscii(){
    for (let i = 0; i <= 255; i++) {
      this.ASCII.push(String.fromCharCode(i));
    }

  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getKeystream(mode){
    this.Keystream = '';
    if(!this.Plaintext){
      alert('Please input the plaintext first to generate a keystream!')
    }else {
      if(mode == '0'){
        for (let i in this.Plaintext) {
          let k = this.getRandomInt(0, 255);
          this.Keystream += String.fromCharCode(k);
        }
      }
      else if(mode == '2'){
        let plain = this.Plaintext.split(' ');
        for (let i in plain) {
          if (plain[i] == undefined){
            break
          }
          let k = this.getRandomInt(0,  255);
          this.Keystream += k.toString(2)+' ';
        }
      }
      else if(mode == '10'){
        let plain = this.Plaintext.split(' ');
        for (let i in plain) {
          let k = this.getRandomInt(0,  255);
          this.Keystream += k+' ';
        }
      }else if(mode == '8'){
        let plain = this.Plaintext.split(' ');
        for (let i in plain ) {
          if (plain[i] == undefined){
            break
          }
          let k = this.getRandomInt(0,  255);
          this.Keystream += k.toString(8)+' ';
        }
      }
      else{
        let plain = this.Plaintext.split(' ');
        for (let i in plain ) {
          if (plain[i] == undefined){
            break
          }
          let k = this.getRandomInt(0,  255);
          this.Keystream += k.toString(16)+' ';
        }
      }

    }
  }

  Encrypt(mode){
    this.Ciphertext='';
    this.CipherBin = '';
    this.CipherHex = '';
    this.CipherChar = '';
    this.CipherDec = '';
    this.CipherOct = '';
    this.keyErr = false;
    this.plainErr = false;
    this.plNkeyErr = false;

    if (!this.Plaintext && !this.Keystream){
      this.plainErr = true;
      this.keyErr = true;
    }else if(!this.Plaintext){
      this.plainErr = true;
    }else if(!this.Keystream){
      this.keyErr = true;
    }
    else if((mode == '0') && (this.Keystream.length < this.Plaintext.length)){
      this.plNkeyErr = true;
    }
    else {

      // for (let i in this.Plaintext){
      //   let j = this.Plaintext[i].charCodeAt(0);
      //   let k = this.Keystream[i].charCodeAt(0);
      //   let f = j^k;
      //   //Character
      //   // cipher += String.fromCharCode(f)+' ';
      //   // Binary
      //   this.CipherChar += String.fromCharCode(f);
      //   this.CipherDec += f.toString()+' ';
      //   this.CipherBin +=('00000000'+f.toString(2)).slice(-8)+ ' ';
      //   this.CipherHex += f.toString(16)+ ' ';
      //   this.CipherOct += f.toString(8)+ ' ';
      // }
      if (mode == '0'){
        for (let i in this.Plaintext){
          if (this.Plaintext[i] == undefined || this.Keystream[i] == undefined){
            break
          }
          let j = this.Plaintext[i].charCodeAt(0);
          let k = this.Keystream[i].charCodeAt(0);
          let f = j^k;
          this.Ciphertext += String.fromCharCode(f);
          this.CipherChar += String.fromCharCode(f);
          this.CipherDec += f.toString()+' ';
          this.CipherBin +=('00000000'+f.toString(2)).slice(-8)+ ' ';
          this.CipherHex += f.toString(16)+ ' ';
          this.CipherOct += f.toString(8)+ ' ';
        }
      }
      // else if(mode == '10'){
      //   let plain = this.Plaintext.split(' ');
      //   let key = this.Keystream.split(' ');
      //   for (let i in plain) {
      //     if (plain[i] == undefined || key[i] == undefined){
      //       break
      //     }
      //     let j = parseInt(plain[i],10);
      //     let k = parseInt(key[i],10);
      //     let f = j ^ k;
      //     this.Ciphertext += f + ' ';
      //   }
      // }else if(mode == '2') {
      //   let plain = this.Plaintext.split(' ');
      //   let key = this.Keystream.split(' ');
      //   for (let i in plain) {
      //     if (plain[i] == undefined || key[i] == undefined){
      //       break
      //     }
      //     let j = parseInt(plain[i], 2);
      //     let k = parseInt(key[i], 2);
      //     let f = j ^ k;
      //     this.Ciphertext += ('00000000' + f.toString(2)).slice(-8) + ' ';
      //   }
      // }else if(mode == '8') {
      //   let plain = this.Plaintext.split(' ');
      //   let key = this.Keystream.split(' ');
      //   for (let i in plain) {
      //     if (plain[i] == undefined || key[i] == undefined){
      //       break
      //     }
      //     let j = parseInt(plain[i], 8);
      //     let k = parseInt(key[i], 8);
      //     let f = j ^ k;
      //     this.Ciphertext += f.toString(8)+ ' ';
      //   }
      // }
      else {
        let plain = this.Plaintext.split(' ');
        let key = this.Keystream.split(' ');
        for (let i in plain) {
          if (plain[i] == undefined || key[i] == undefined){
            break
          }
          let j = parseInt(plain[i], parseInt(mode));
          let k = parseInt(key[i], parseInt(mode));
          let f = j ^ k;
          this.Ciphertext += f.toString(parseInt(mode))+ ' ';
          this.CipherChar += String.fromCharCode(f);
          this.CipherDec += f.toString()+' ';
          this.CipherBin +=('00000000'+f.toString(2)).slice(-8)+ ' ';
          this.CipherHex += f.toString(16)+ ' ';
          this.CipherOct += f.toString(8)+ ' ';
        }

      }

    }


  }

  Decrypt(keyNplainMode, cipMode){
    this.keyErr = false;
    this.CipErr = false;
    this.keyErr = false;
    this.Plaintext = '';
    if (!this.Ciphertext && !this.Keystream){
      this.CipErr = true;
      this.keyErr = true;
    }else if(!this.Ciphertext){
      this.CipErr = true;
    }else if(!this.Keystream){
      this.keyErr = true;
    }
    else if(((cipMode == '0') && (keyNplainMode == '0')) && (this.Keystream.length < this.Plaintext.length)){
      this.cipNkeyErr = true;
    }else{
      if((keyNplainMode == '0') && (cipMode == '0')){
        for (let i in this.Ciphertext){
          if((this.Keystream[i] == undefined) || (this.Ciphertext[i] == undefined)){
            break;
          }
          let j = this.Ciphertext[i].charCodeAt(0);
          let k = this.Keystream[i].charCodeAt(0);
          let f = j^k;
          this.Plaintext += String.fromCharCode(f);
        }
      }else if((keyNplainMode == '0') && (cipMode != '0')){
        let cipher = this.Ciphertext.split(' ');
        for (let i in cipher){
          if((this.Keystream[i] == undefined) || (cipher[i] == undefined)){
            break;
          }
          let j = parseInt(cipher[i],parseInt(cipMode));
          let k = this.Keystream[i].charCodeAt(0);
          let f = j^k;
          this.Plaintext += String.fromCharCode(f);
        }
      }else if((keyNplainMode != '0') && (cipMode == '0')){
        let key = this.Keystream.split(' ');
        for(let i in this.Ciphertext){
          if((key[i] == undefined) || (this.Ciphertext[i] == undefined)){
            break;
          }
          let j = parseInt(key[i],keyNplainMode);
          let k = this.Ciphertext[i].charCodeAt(0);
          let f = j^k;
          this.Plaintext += f.toString(parseInt(keyNplainMode))+ ' ';
        }
      }else if((keyNplainMode != '0') && (cipMode != '0')){
        let key = this.Keystream.split(' ');
        let cipher = this.Ciphertext.split(' ');
        for (let i in cipher){
          if((key[i] == undefined) || (cipher[i] == undefined)){
            break;
          }
          let j = parseInt(cipher[i],parseInt(cipMode));
          let k = parseInt(key[i],parseInt(keyNplainMode));
          let f = j^k;
          this.Plaintext += f.toString(parseInt(keyNplainMode))+ ' ';
        }
      }
    }

  }

  changeMode(mode){
    if (mode == '0'){
      this.Ciphertext = this.CipherChar;
    }
    else if(mode == '10'){
      this.Ciphertext = this.CipherDec;
    }
    else if(mode == '2'){
      this.Ciphertext = this.CipherBin;
    }
    else if(mode == '8'){
      this.Ciphertext = this.CipherOct;
    }
    else if(mode == '16'){
      this.Ciphertext = this.CipherHex;
    }

  }

}
