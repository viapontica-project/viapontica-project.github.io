import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bird } from '../../bird.model';
import { BirdsService } from '../../birds.service';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
  public imagePath!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
