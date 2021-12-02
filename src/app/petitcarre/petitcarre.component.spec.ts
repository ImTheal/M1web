import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitcarreComponent } from './petitcarre.component';

describe('PetitcarreComponent', () => {
  let component: PetitcarreComponent;
  let fixture: ComponentFixture<PetitcarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitcarreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitcarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
