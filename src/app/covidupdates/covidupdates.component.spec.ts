import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidupdatesComponent } from './covidupdates.component';

describe('CovidupdatesComponent', () => {
  let component: CovidupdatesComponent;
  let fixture: ComponentFixture<CovidupdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidupdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
