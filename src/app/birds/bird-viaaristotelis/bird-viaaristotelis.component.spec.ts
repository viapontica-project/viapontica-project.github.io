import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdViaaristotelisComponent } from './bird-viaaristotelis.component';

describe('BirdViaaristotelisComponent', () => {
  let component: BirdViaaristotelisComponent;
  let fixture: ComponentFixture<BirdViaaristotelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdViaaristotelisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdViaaristotelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
