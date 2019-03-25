import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkerDialogComponent } from './project-worker-dialog.component';

describe('ProjectWorkerDialogComponent', () => {
  let component: ProjectWorkerDialogComponent;
  let fixture: ComponentFixture<ProjectWorkerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWorkerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWorkerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
