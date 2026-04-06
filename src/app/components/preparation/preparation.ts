import { Component } from '@angular/core';
// MatDialog використовуєм через DI
import { MatDialog } from '@angular/material/dialog';
import { QuestionItem, MOCK_DATA } from '../category/category.config';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal';
import { DeleteConfimationModal } from '../delete-confimation-modal/delete-confimation-modal';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-preparation',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './preparation.html',
  styleUrl: './preparation.css',
})
export class Preparation {
  displayedColumns: string[] = ['position', 'question', 'actions'];
  // QuestionItem це тип даних для елементів таблиці, MOCK_DATA - це масив з даними для заповнення таблиці
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  // MatDialog використовується для відкриття діалогових вікон(popup), таких як  GenerateAnswerModalComponent
  // MatDialog використовуєм через Dependency Injection
  constructor(public dialog: MatDialog) {}

  // dataSource: CdkTableDataSourceInput<any> | undefined;
  openGenerateDialog(question: QuestionItem): void {
    // передаємо декілька аргументів: 1) компонент, який в попап буде відкритий 2) налаштування для попапу
    const dialogRef = this.dialog.open(GenerateAnswerModal, {
      width: '500px',
      data: { question: question.question, answer: question.answer },
    });
    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('Dialogue was closed', result);
      if (result) {
        // коли додамо service для збереження даних, то тут буде виклик методу для оновлення даних в базі
      }
    });
  }
  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfimationModal, {
      width: '333px',
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('The Dialogue Was Closed', result);
      if (result) {
        console.log('Question would be deleted.', question);
        // коли додамо service для видалення даних, то тут буде виклик методу для видалення даних з бази
      }
    });
  }
}
