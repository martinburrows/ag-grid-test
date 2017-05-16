import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-component',
  templateUrl: './red-component.component.html',
  styleUrls: ['./red-component.component.scss']
})
export class RedComponentComponent implements OnInit {

  public params: any;

  constructor() { }

  ngOnInit() {

  }

  agInit(params: any) : void {
    this.params = params;
  }

}
