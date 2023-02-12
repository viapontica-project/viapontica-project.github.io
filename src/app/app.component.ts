import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bird } from './birds/bird.model';
import { BirdsService } from './birds/birds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'bird-project';
  public birds: Bird[] = [];
  public activeSpecies: string[] = [];
  public activeNames: string[] = [];
  //selection
  public selectedSpecies: string[] = []; //will hold the selected species
  public selectedNames: string[] = [];

  constructor(private birdsService: BirdsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.birds = this.birdsService.getBirds();
    this.router.navigate(['birds'])
  }

  onForUs() {
    this.router.navigate(['forUs'], { relativeTo: this.route });
  }

  onForPictures() {
    this.router.navigate(['forPictures'], { relativeTo: this.route });
  }

  onForViapontica() {
    this.router.navigate(['forViapontica'], { relativeTo: this.route });
  }

  onForViaaristotelis() {
    this.router.navigate(['forViaaristotelis'], { relativeTo: this.route });
  }

  onHomePage() {
    this.router.navigate(['home'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.selectedSpecies = [];
    this.selectedNames = [];
  }
}
