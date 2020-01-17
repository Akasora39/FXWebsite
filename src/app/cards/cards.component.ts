import { Component, OnInit } from '@angular/core';

import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
