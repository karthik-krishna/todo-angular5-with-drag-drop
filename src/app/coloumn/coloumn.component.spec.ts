import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoumnComponent } from './coloumn.component';

describe('ColoumnComponent', () => {
  let component: ColoumnComponent;
  let fixture: ComponentFixture<ColoumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
