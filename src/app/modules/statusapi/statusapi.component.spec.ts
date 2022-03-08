import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusapiComponent } from './statusapi.component';

describe('StatusapiComponent', () => {
  let component: StatusapiComponent;
  let fixture: ComponentFixture<StatusapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
