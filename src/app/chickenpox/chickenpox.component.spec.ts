import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenpoxComponent } from './chickenpox.component';

describe('ChickenpoxComponent', () => {
  let component: ChickenpoxComponent;
  let fixture: ComponentFixture<ChickenpoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenpoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenpoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
