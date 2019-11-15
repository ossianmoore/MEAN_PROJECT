import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRecordsComponent } from './view-all-records.component';

describe('ViewAllRecordsComponent', () => {
  let component: ViewAllRecordsComponent;
  let fixture: ComponentFixture<ViewAllRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
