import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TypingAnimation } from '../../directives/typing-animation';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuestionItem } from '../category/category.config';

@Component({
  selector: 'app-generate-answer-modal',
  imports: [CommonModule, MatButtonModule, TypingAnimation, MatProgressSpinnerModule],
  templateUrl: './generate-answer-modal.html',
  styleUrl: './generate-answer-modal.css',
})
export class GenerateAnswerModal {
  isLoading = false;
  constructor(
    public dialogRef: MatDialogRef<GenerateAnswerModal>,
    @Inject(MAT_DIALOG_DATA)
    public data: Pick<QuestionItem, 'question' | 'answer'>,
  ) {}
  ngOnInit(): void {
    if (!this.data.answer) {
      this.regenerateAnswer();
    }
  }
  regenerateAnswer(): void {
    this.isLoading = true;
    // simulate API call (simulate generating answer, no service yet)
    setTimeout(() => {
      this.data.answer = 'This is a generated answer for the question: ' + this.data.question;
      this.isLoading = false;
    }, 2000);
  }
  // Метод для збереження відповіді та закриття діалогового вікна (popup)
  saveAnswer(): void {
    this.dialogRef.close(this.data.answer);
  }
}
