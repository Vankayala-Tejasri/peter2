import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetComponent } from './ret.component';

describe('RetComponent', () => {
  let component: RetComponent;
  let fixture: ComponentFixture<RetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
