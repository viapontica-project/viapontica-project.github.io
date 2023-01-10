import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdStartComponent } from './bird-start.component';

describe('BirdStartComponent', () => {
  let component: BirdStartComponent;
  let fixture: ComponentFixture<BirdStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
