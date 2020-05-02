import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSystemComponent } from './feedback-system.component';

describe('FeedbackSystemComponent', () => {
  let component: FeedbackSystemComponent;
  let fixture: ComponentFixture<FeedbackSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
