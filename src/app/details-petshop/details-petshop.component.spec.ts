import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPetshopComponent } from './details-petshop.component';

describe('DetailsPetshopComponent', () => {
  let component: DetailsPetshopComponent;
  let fixture: ComponentFixture<DetailsPetshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPetshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
