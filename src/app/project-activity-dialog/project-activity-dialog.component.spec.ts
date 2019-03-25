import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectActivityDialogComponent } from './project-activity-dialog.component';

describe('ProjectActivityDialogComponent', () => {
  let component: ProjectActivityDialogComponent;
  let fixture: ComponentFixture<ProjectActivityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectActivityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectActivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
