import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdItemComponent } from './bird-item.component';

describe('BirdItemComponent', () => {
  let component: BirdItemComponent;
  let fixture: ComponentFixture<BirdItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
