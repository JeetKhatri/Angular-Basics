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
  apiValidation="invalid api";
  ngOnInit() {
  }
  isValidAPI(){
    if (this.studentName=="" || this.favSport=="" || this.favSport=="nothing") {
      return this.apiValidation="invalid api";
    } else {
      return this.apiValidation="valid api";
    }
  }
}
