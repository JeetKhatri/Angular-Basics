import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-generation',
  templateUrl: './api-generation.component.html',
  styleUrls: ['./api-generation.component.css']
})
export class ApiGenerationComponent implements OnInit {

  studentName="";
  favSport="";
  constructor() { }
  apiValidation=false;
  apiList=[];
  ngOnInit() {
  }
  isValidAPIMethod(){
    if (this.studentName=="" || this.favSport=="" || this.favSport=="nothing") {
      return this.apiValidation=false;
    } else {
      return this.apiValidation=true;
    }
  }
  addAPI(){
      if (this.studentName!="" && this.favSport!="" && this.favSport!="nothing") {
        this.apiList.push("{ id:"+(this.apiList.length+1)+", studentName:"+this.studentName+", favSport:"+this.favSport+" }");
      }
  }
}