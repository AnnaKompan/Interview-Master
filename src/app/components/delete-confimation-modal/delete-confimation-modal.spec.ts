import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfimationModal } from './delete-confimation-modal';

describe('DeleteConfimationModal', () => {
  let component: DeleteConfimationModal;
  let fixture: ComponentFixture<DeleteConfimationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteConfimationModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteConfimationModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
