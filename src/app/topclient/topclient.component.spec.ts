import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopclientComponent } from './topclient.component';

describe('TopclientComponent', () => {
  let component: TopclientComponent;
  let fixture: ComponentFixture<TopclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
