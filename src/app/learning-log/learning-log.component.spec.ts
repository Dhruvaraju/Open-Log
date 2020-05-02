import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningLogComponent } from './learning-log.component';

describe('LearningLogComponent', () => {
  let component: LearningLogComponent;
  let fixture: ComponentFixture<LearningLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
