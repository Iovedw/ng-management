import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandChildComponent } from './brand-child.component';

describe('BrandChildComponent', () => {
  let component: BrandChildComponent;
  let fixture: ComponentFixture<BrandChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
