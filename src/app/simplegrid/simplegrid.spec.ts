import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simplegrid } from './simplegrid';

describe('Simplegrid', () => {
  let component: Simplegrid;
  let fixture: ComponentFixture<Simplegrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simplegrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simplegrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
