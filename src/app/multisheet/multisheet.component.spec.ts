import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultisheetComponent } from './multisheet.component';

describe('MultisheetComponent', () => {
  let component: MultisheetComponent;
  let fixture: ComponentFixture<MultisheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultisheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultisheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
