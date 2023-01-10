import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';
import { Bird } from '../bird.model';
import { BirdsService } from '../birds.service';
import { Observable } from 'rxjs';
import { debounceTime, startWith, map, tap } from 'rxjs/operators';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {

  public birds: Bird[] = [];
  public visibleBirds: Bird[] = [];
  public activeSpecies: string[] = [];
  public activeSp: Option[] = [];
  public activeN: Option[] = [];
  public activeNames: string[] = [];
  public control: FormControl = new FormControl('', [Validators.required])
  public filter: FormControl = new FormControl('');
  public filtedSpeciesOptions$!: Observable<Array<Option>>;
  public controlName: FormControl = new FormControl('', [Validators.required])
  public filterName: FormControl = new FormControl('');
  public filtedNameOptions$!: Observable<Array<Option>>;
  public selectedSpecies: string = '';
  public selectedSp = "";
  public selectedN = "";
  public lastSelectedSp = "";


  constructor(private birdsService: BirdsService) { }

  ngOnInit(): void {
    this.birds = this.birdsService.getBirds();
    this.visibleBirds = this.birds.slice();
    this.updateBirds();
    //initial including all active species
    for (let bird of this.birds) {
      if (!this.activeSpecies.includes(bird.species)) {
        this.activeSpecies.push(bird.species);
        this.activeSp.push({ value: bird.species })
      }
    }
    //including all active names
    // for (let bird of this.birds) {
    //   if (!this.activeNames.includes(bird.name)) {
    //     this.activeNames.push(bird.name);
    //     this.activeN.push({ value: bird.name })
    //   }
    // }

    this.filtedSpeciesOptions$ = this.filter.valueChanges.pipe(
      debounceTime(50),
      startWith(''),
      map(target => target.toLowerCase()),
      tap(target => console.log(target)),
      map(target => this.activeSp.filter(opt => opt.value.toLowerCase().includes(target)))
    );

    this.filtedNameOptions$ = this.filterName.valueChanges.pipe(
      debounceTime(50),
      startWith(''),
      map(target => target.toLowerCase()),
      tap(target => console.log(target)),
      map(target => this.activeN.filter(opt => opt.value.toLowerCase().includes(target)))
    );
  }

  getOptionStyle(opt: Option, filted: Array<Option>): { [key: string]: any } {
    const style: { [key: string]: any } = {};

    style['display'] = filted.indexOf(opt) < 0 ? 'none' : '';

    return style;
  }

  updateBirds() {
    if (this.selectedSp !== '' && this.selectedN === "") { // onlySpecies Selected
      this.visibleBirds = this.birds.filter(bird => bird.species === this.selectedSp)
      for (let bird of this.birds) {
        if (bird.species === this.selectedSp && !this.activeNames.includes(bird.name)) {
          this.activeNames.push(bird.name);
          this.activeN.push({ value: bird.name })
        }
      }
      this.filtedNameOptions$ = this.filterName.valueChanges.pipe(
        debounceTime(50),
        startWith(''),
        map(target => target.toLowerCase()),
        tap(target => console.log(target)),
        map(target => this.activeN.filter(opt => opt.value.toLowerCase().includes(target)))
      );

      this.filtedSpeciesOptions$ = this.filter.valueChanges.pipe(
        debounceTime(50),
        startWith(''),
        map(target => target.toLowerCase()),
        tap(target => console.log(target)),
        map(target => this.activeSp.filter(opt => opt.value.toLowerCase().includes(target)))
      );

    } else if (this.selectedSp !== '' && this.selectedN !== "") {
      this.activeN = [];
      this.activeNames = [];
      for (let bird of this.birds) {
        if (bird.species === this.selectedSp && !this.activeNames.includes(bird.name)) {
          this.activeNames.push(bird.name);
          this.activeN.push({ value: bird.name })
        }
      }

      this.visibleBirds = this.birds.filter(bird => bird.species === this.selectedSp && bird.name === this.selectedN)

      this.filtedNameOptions$ = this.filterName.valueChanges.pipe(
        debounceTime(50),
        startWith(''),
        map(target => target.toLowerCase()),
        tap(target => console.log(target)),
        map(target => this.activeN.filter(opt => opt.value.toLowerCase().includes(target)))
      );

      this.filtedSpeciesOptions$ = this.filter.valueChanges.pipe(
        debounceTime(50),
        startWith(''),
        map(target => target.toLowerCase()),
        tap(target => console.log(target)),
        map(target => this.activeSp.filter(opt => opt.value.toLowerCase().includes(target)))
      );

    } else {
      this.activeN = [];
      this.activeNames = [];
      this.visibleBirds = this.birds.slice();
    }
  }

  resetFilter() {
    this.activeN = [];
    this.selectedSp = "";
    this.activeNames = [];
    this.visibleBirds = this.birds.slice();
  }
  resetFilterNames() {
    this.activeN = [];
    this.selectedN = "";
    this.activeNames = [];
  }
}

interface Option {
  value: any;
}
