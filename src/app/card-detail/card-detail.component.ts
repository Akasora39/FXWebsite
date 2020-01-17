import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as pool from '../cc.json';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  id: number;
  private sub: any;
  name: string;
  title: string;
  img: string;
  act_desc: string;
  pas_desc: string;
  trait: Array<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    var card = pool.characters[this.id%100];
    this.name = card.name;
    this.title = card.title;
    this.img = card.img;
    this.act_desc = card.act_desc;
    this.pas_desc = card.pas_desc;
    this.trait = card.trait;
  }

}
