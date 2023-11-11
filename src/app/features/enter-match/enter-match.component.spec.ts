import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterMatchComponent } from './enter-match.component';

describe('EnterMatchComponent', () => {
  let component: EnterMatchComponent;
  let fixture: ComponentFixture<EnterMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
