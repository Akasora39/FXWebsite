import { Component, OnInit } from '@angular/core';

import * as pool from '../cc.json';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  list = []
  page = 1
  constructor() { }

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.list = []
    var range = (this.page - 1) * 10;
    for(var i=0; i<10; i++)
    {
      var card = pool.characters[range+i]
      this.list.push(card)
    }
  }

}
