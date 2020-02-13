import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-warning-alert></app-warning-alert>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = 'Nicolas';
  enableSetUser = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = event.target.value;
  }

  onEnableSetUser(){
    if (this.userName != '') {
      this.enableSetUser = false;
    }
  }

  onSetUserName(){
    this.userName = '';
    this.enableSetUser = true;
  }

}
