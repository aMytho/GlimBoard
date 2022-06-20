import { Component, OnInit } from '@angular/core';
import { Button } from './button/button';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get buttons() {
    return [1,3,4]
  }

  temp() {
  }
}
