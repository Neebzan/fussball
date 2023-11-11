import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStandingComponent } from './match-standing.component';

describe('MatchStandingComponent', () => {
  let component: MatchStandingComponent;
  let fixture: ComponentFixture<MatchStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchStandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
