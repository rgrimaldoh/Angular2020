import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPrimer2Component } from './mi-primer2.component';

describe('MiPrimer2Component', () => {
  let component: MiPrimer2Component;
  let fixture: ComponentFixture<MiPrimer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPrimer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPrimer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
