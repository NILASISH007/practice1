import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalTableComponent } from './conditional-table.component';

describe('ConditionalTableComponent', () => {
  let component: ConditionalTableComponent;
  let fixture: ComponentFixture<ConditionalTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalTableComponent]
    });
    fixture = TestBed.createComponent(ConditionalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
