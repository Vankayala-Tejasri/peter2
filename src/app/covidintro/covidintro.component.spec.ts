import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidintroComponent } from './covidintro.component';

describe('CovidintroComponent', () => {
  let component: CovidintroComponent;
  let fixture: ComponentFixture<CovidintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidintroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
