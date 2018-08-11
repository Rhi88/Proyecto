import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilasComponent } from './pilas.component';

describe('PilasComponent', () => {
  let component: PilasComponent;
  let fixture: ComponentFixture<PilasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
