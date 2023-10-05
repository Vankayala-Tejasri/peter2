import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsthamaComponent } from './asthama.component';

describe('AsthamaComponent', () => {
  let component: AsthamaComponent;
  let fixture: ComponentFixture<AsthamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsthamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsthamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
