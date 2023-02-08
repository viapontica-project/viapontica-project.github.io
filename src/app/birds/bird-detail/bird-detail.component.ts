import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Bird } from '../bird.model';
import { BirdsService } from '../birds.service';
import { ImageDialogComponent } from '../dialogs/image-dialog/image-dialog.component';

@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: ['./bird-detail.component.css']
})
export class BirdDetailComponent implements OnInit {

  bird: Bird = {
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
  id: number = 0;
  isSelected: boolean = false;

  constructor(
    private birdService: BirdsService,
    private route: ActivatedRoute,
    private router: Router,
    private cdref: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }




  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.bird = this.birdService.getBird(this.id)
      if (this.bird) {
        this.isSelected = true;

      } else {
        this.isSelected = false;
      }
    })
  }

  openImageDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    //to be implemented
    const imageDialog = this.dialog.open(ImageDialogComponent, {
      width: "80vw",
      height: "80vh",
      enterAnimationDuration,
      exitAnimationDuration
    })
    imageDialog.componentInstance.imagePath = this.bird.image;
  }

}
