import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensClothingComponent } from './mens-clothing.component';

describe('MensClothingComponent', () => {
  let component: MensClothingComponent;
  let fixture: ComponentFixture<MensClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
