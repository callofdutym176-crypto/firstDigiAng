import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simpleform } from './simpleform';

describe('Simpleform', () => {
  let component: Simpleform;
  let fixture: ComponentFixture<Simpleform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simpleform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simpleform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
