import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homecontent } from './homecontent';

describe('Homecontent', () => {
  let component: Homecontent;
  let fixture: ComponentFixture<Homecontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homecontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homecontent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
