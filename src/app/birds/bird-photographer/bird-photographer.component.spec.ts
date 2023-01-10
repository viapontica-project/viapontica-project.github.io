import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdPhotographerComponent } from './bird-photographer.component';

describe('BirdPhotographerComponent', () => {
  let component: BirdPhotographerComponent;
  let fixture: ComponentFixture<BirdPhotographerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdPhotographerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
