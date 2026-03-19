import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationListComponent } from './pagination-list.component';

describe('PaginationListComponent', () => {
  let component: PaginationListComponent;
  let fixture: ComponentFixture<PaginationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationListComponent]
    });
    fixture = TestBed.createComponent(PaginationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
