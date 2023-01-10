import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdViaponticaComponent } from './bird-viapontica.component';

describe('BirdViaponticaComponent', () => {
  let component: BirdViaponticaComponent;
  let fixture: ComponentFixture<BirdViaponticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdViaponticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdViaponticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
