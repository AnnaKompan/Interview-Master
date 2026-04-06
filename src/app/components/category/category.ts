import { Component } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MOCK_DATA, QuestionItem } from './category.config';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal';
import { DeleteConfimationModal } from '../delete-confimation-modal/delete-confimation-modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category',
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  displayedColumns: string[] = ['position', 'question', 'answer', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  // MatDialog використовується для відкриття діалогових вікон(popup), таких як  GenerateAnswerModalComponent
  // MatDialog використовуєм через Dependency Injection
  constructor(public dialog: MatDialog) {}

  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfimationModal, {
      width: '333px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('The dialog was closed', result);
      if (result) {
        console.log('Question would be deleted.', question);
        // TODO - call the service for deleting an answer
      }
    });
  }
}
