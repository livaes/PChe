import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoexistoComponent } from './noexisto.component';

describe('NoexistoComponent', () => {
  let component: NoexistoComponent;
  let fixture: ComponentFixture<NoexistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoexistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoexistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
