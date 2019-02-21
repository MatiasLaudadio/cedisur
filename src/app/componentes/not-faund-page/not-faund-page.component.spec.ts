import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFaundPageComponent } from './not-faund-page.component';

describe('NotFaundPageComponent', () => {
  let component: NotFaundPageComponent;
  let fixture: ComponentFixture<NotFaundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFaundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFaundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
