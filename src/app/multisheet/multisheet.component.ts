import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";
@Component({
  selector: 'app-multisheet',
  templateUrl: './multisheet.component.html',
  styleUrls: ['./multisheet.component.scss']
})
export class MultisheetComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  answer = "No answer yet";
  a: any;
  QuestionData: any = [];
  sheetname: any[] = [];
  ExcelData: any;
  Ans: any;
  QuestionList: any = [];
  bigdata: any = [];
  angular: any =[];
  node: any = [];
  react: any = [];
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
        this.bigdata = data;
        this.QuestionData.push(updateddata);
       this.QuestionData = data.map((res) => ({ res, userSelected: "" }));
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
  change(outer: any, index: any) {
    this.QuestionData[index].userSelected = outer
  }
  selectedTabChange() { }
  onSubmitHandler() {}

}