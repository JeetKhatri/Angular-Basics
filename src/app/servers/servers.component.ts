import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus="No server created";
  serverName="test";
  isServerCreated=false;
  servers=['server1','server2'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onServerCreation(){
    this.servers.push(this.serverName);
    this.isServerCreated=true;
    this.serverCreationStatus="Server was created with the name: "+this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}