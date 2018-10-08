import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersliderComponent } from './offerslider.component';

describe('OffersliderComponent', () => {
  let component: OffersliderComponent;
  let fixture: ComponentFixture<OffersliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
