import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDessalementComponent } from './details-dessalement.component';

describe('DetailsDessalementComponent', () => {
  let component: DetailsDessalementComponent;
  let fixture: ComponentFixture<DetailsDessalementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDessalementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDessalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
