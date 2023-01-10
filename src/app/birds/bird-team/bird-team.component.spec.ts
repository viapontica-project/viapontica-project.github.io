import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdTeamComponent } from './bird-team.component';

describe('BirdTeamComponent', () => {
  let component: BirdTeamComponent;
  let fixture: ComponentFixture<BirdTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
