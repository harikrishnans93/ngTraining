import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Status = true;
  log = [];
  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.Status = !this.Status;
    this.log.push(new Date());
  }

}
