import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabitiesComponent } from './diabities.component';

describe('DiabitiesComponent', () => {
  let component: DiabitiesComponent;
  let fixture: ComponentFixture<DiabitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
