import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavegationComponent } from './bar-navegation.component';

describe('BarNavegationComponent', () => {
  let component: BarNavegationComponent;
  let fixture: ComponentFixture<BarNavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarNavegationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
