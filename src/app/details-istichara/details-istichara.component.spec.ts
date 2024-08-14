import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIsticharaComponent } from './details-istichara.component';

describe('DetailsIsticharaComponent', () => {
  let component: DetailsIsticharaComponent;
  let fixture: ComponentFixture<DetailsIsticharaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsIsticharaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIsticharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
