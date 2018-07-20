import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteautoComponent } from './aceiteauto.component';

describe('AceiteautoComponent', () => {
  let component: AceiteautoComponent;
  let fixture: ComponentFixture<AceiteautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceiteautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceiteautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
