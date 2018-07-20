import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitecomComponent } from './aceitecom.component';

describe('AceitecomComponent', () => {
  let component: AceitecomComponent;
  let fixture: ComponentFixture<AceitecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
