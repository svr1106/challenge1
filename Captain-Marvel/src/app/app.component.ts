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
    debugger
    for (let key in value) {
      this.resultArray.push({ key: key, value: value[key] });
    }

  }
  FilepushToArray(value) {
    for (let key in value) {
      this.fileResultArray.push({ key: key, value: value[key] });
    }

  }
  // courseFileSelected(fileList: FileList): void {
  //   debugger
  //   let filestring;
  //   let file = fileList[0];
  //   // let fileReader: FileReader = new FileReader();
  //   // let self = this;
  //   // fileReader.onloadend = function (x) {
  //   //   debugger
  //   //   self.fileContent = String(fileReader.result);
  //   // }
  //   let reader = new FileReader();

  //   reader.readAsText(file);
  //   reader.onload = function() {
  //  console.log(reader.result);
  //     // filestring=String(reader.result);
  //   };
  //   // this.Sumbit(filestring);


  // }
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
    debugger
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
    debugger
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
