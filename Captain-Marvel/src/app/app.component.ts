import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  fileContent: string = '';
  count: number = 0;
  resultArray = [];
  fileResultArray = [];

  constructor() { }


  pushToArray(value) {
    
    for (let key in value) {
      this.resultArray.push({ key: key, value: value[key] });
    }

  }
  FilepushToArray(value) {
    for (let key in value) {
      this.fileResultArray.push({ key: key, value: value[key] });
    }

  }

  
  fileUploaded(event) {
    const file: File = event.target.files[0];
    if (file) {
      let fileReader = new FileReader();
      fileReader.onloadend = (e) => {
        console.log(fileReader.result);
        this.fileContent = String(fileReader.result);
        this.Upload(this.fileContent);
      };
      fileReader.readAsText(file);
    }
  }
  Upload(value) {
    
    this.fileResultArray = [];
    var str = this.removeDuplicateCharacters(value);
    let hash = {};
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      var count = value.split(ch).length - 1;
      hash[ch] = count;
    }
    this.FilepushToArray(hash);
  }
  Sumbit(value) {
    
    this.resultArray = [];
    var str = this.removeDuplicateCharacters(value);
    let hash = {};
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      var count = value.split(ch).length - 1;
      hash[ch] = count;
    }
    this.pushToArray(hash);
  }

  removeDuplicateCharacters(input) {
    return input
      .split('')
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }

}
