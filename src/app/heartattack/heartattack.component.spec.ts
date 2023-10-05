import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartattackComponent } from './heartattack.component';

describe('HeartattackComponent', () => {
  let component: HeartattackComponent;
  let fixture: ComponentFixture<HeartattackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartattackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartattackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
