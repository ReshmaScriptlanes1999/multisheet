import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";
@Component({
  selector: 'app-multisheet',
  templateUrl: './multisheet.component.html',
  styleUrls: ['./multisheet.component.scss']
})
export class MultisheetComponent implements OnInit {
  userSelected: any;
  outer: any;
  constructor() { }
  ngOnInit(): void {
  }
  Ans = "No answer yet";
  a: any;
  QuestionData: any = [];
  sheetname: any[] = [];
  ExcelData: any;
  big: any;
  QuestionList: any = [];
  bigdata: any = [];
  angular: any =[];
  node: any = [];
  react: any = [];
  selectedDay:string ='';
  pages:number | undefined;
  page = 1;
  pageSize = 5;

  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      let workbook = XLSX.read(fileReader.result, { type: "binary" });
      let question = workbook.SheetNames;
      this.sheetname = question;
      for (let sheets of question) {
        const data = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheets]);
        const updateddata = {
          name: sheets, data: data
        }
        this.QuestionList = updateddata;
        //this.bigdata = data;
        this.QuestionData.push(updateddata);
        
        console.log("ddddd"+JSON.stringify( this.bigdata[0]))
      console.log("zero"+JSON.stringify(this.QuestionData[0]));
      
       //this.QuestionData[0] = data.map((res) => ({ res, userSelected: "" }));
       //this.QuestionData[1] = data.map((res) => ({ res, userSelected: "" }));
       //this.QuestionData[2] = data.map((res) => ({ res, userSelected: "" }));
 
       //this.QuestionData[1] = data.map((res) => ({ res, userSelected: "" }));
       //this.ExcelData = data.map((res) => ({ ...res, userSelected: "" }));
       //this.QuestionData[2] = data.map((res) => ({ res, userSelected: "" }));
       //this.ExcelData = data.map((res) => ({ ...res, userSelected: "" }));
       //this.ExcelData = data.map((res) => ({ ...res, userSelected: "" }));
      }
      this.angular=JSON.stringify(this.QuestionData[0]);
      this.node=JSON.stringify(this.QuestionData[1]);
      this.react=JSON.stringify(this.QuestionData[2]);
      console.log("angular"+this.angular);
      console.log("node"+this.node);
      console.log("react"+this.react);
      
      
      
      console.log(this.QuestionData)
    }
    //onSubmitHandler() {}

  }
  /*change(event: any) {
   this.userSelected= event.target.value; 
 }*/
 change(data: any, index: any) {
  
//  this.QuestionData.data[index].userSelected = data;
console.log("iiii"+index)
  this.QuestionData[0].data[index].userSelected = data;
  console.log("i2"+index);
  
 this.QuestionData[1].data[index].userSelected = data;
 
  this.QuestionData[2].data[index].userSelected = data;
  
}
handlePageChange(e :any){
  // this.page = e;
  console.log(e);
  this.page = e;
}
 
 

}