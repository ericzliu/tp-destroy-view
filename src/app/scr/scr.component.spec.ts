import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrComponent } from './scr.component';

describe('ScrComponent', () => {
  let component: ScrComponent;
  let fixture: ComponentFixture<ScrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
