import { Component, Input, OnInit, Output } from '@angular/core';
import { Bird } from '../../bird.model';

@Component({
  selector: 'app-bird-item',
  templateUrl: './bird-item.component.html',
  styleUrls: ['./bird-item.component.css']
})
export class BirdItemComponent implements OnInit {
  @Input() bird: Bird;
  @Input() index: number;
  @Input()
  id!: number;

  constructor() {
    this.bird = {
      id: 0,
      name: '',
      infoLink: '',
      species: '',
      description: '',
      area: '',
      image: '',
      status: '',
      redbook: ''
    };
    this.index = 0;
  }

  ngOnInit(): void {
  }

}
