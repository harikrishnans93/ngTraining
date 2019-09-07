import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  alowNewServer = false;
  serverName = 'Test Server';
  serverCreationStatus = 'No server was created';
  constructor() {
    setTimeout(() => {
      this.alowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'server was created :' + this.serverName;

  }

  onUpdateServer(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  ngOnInit() {
  }

}
