import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionItem, MOCK_DATA } from '../category/category.config';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-preparation',
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: './preparation.html',
  styleUrl: './preparation.css',
})
export class Preparation {
  displayedColumns: string[] = ['position', 'question', 'actions'];
  // QuestionItem це тип даних для елементів таблиці, MOCK_DATA - це масив з даними для заповнення таблиці
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  // MatDialog використовується для відкриття діалогових вікон(popup), таких як  GenerateAnswerModalComponent
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
  openDeleteDialog(_t34: any) {
    throw new Error('Method not implemented.');
  }
}
