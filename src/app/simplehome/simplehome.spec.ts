import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simplehome } from './simplehome';

describe('Simplehome', () => {
  let component: Simplehome;
  let fixture: ComponentFixture<Simplehome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simplehome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simplehome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
