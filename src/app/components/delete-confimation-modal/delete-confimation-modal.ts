import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confimation-modal',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-confimation-modal.html',
  styleUrl: './delete-confimation-modal.css',
})
export class DeleteConfimationModal {
  constructor(public dialogRef: MatDialogRef<DeleteConfimationModal>) {}

  cancel() {
    this.dialogRef.close(false);
  }

  deleteQuestion() {
    this.dialogRef.close(true);
  }
}
