import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesheetComponent } from './singlesheet.component';

describe('SinglesheetComponent', () => {
  let component: SinglesheetComponent;
  let fixture: ComponentFixture<SinglesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
