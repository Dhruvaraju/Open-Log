import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDetailsComponent } from './git-details.component';

describe('GitDetailsComponent', () => {
  let component: GitDetailsComponent;
  let fixture: ComponentFixture<GitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
