import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalColorComponent } from './modal-color.component';

describe('ModalColorComponent', () => {
  let component: ModalColorComponent;
  let fixture: ComponentFixture<ModalColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
