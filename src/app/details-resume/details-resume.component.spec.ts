import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResumeComponent } from './details-resume.component';

describe('DetailsResumeComponent', () => {
  let component: DetailsResumeComponent;
  let fixture: ComponentFixture<DetailsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
