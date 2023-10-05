import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidtestingComponent } from './covidtesting.component';

describe('CovidtestingComponent', () => {
  let component: CovidtestingComponent;
  let fixture: ComponentFixture<CovidtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidtestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
