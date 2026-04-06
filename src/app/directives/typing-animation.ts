import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

// директива це підвид компоненту, який дозволяє нам додавати поведінку до елементів в шаблоні
// директива не має власного шаблону, вона просто змінює поведінку елемента, до якого застосовується
@Directive({
  selector: '[appTypingAnimation]',
})
export class TypingAnimation {
  // @input для того щоб можна було передавати текст для анімації від одного компоненту до іншого
  @Input() appTypingAnimation: string = '';
  @Input() typingSpeed: number = 50;

  // ElementRef використовується для отримання доступу до DOM елемента, до якого застосовується директива.
  // Це дозволяє нам змінювати текст всередині цього елемента.
  // Renderer2 використовується для безпечного маніпулювання DOM елементами.
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}
  // ngOnChanges хук викликається щоразу, коли змінюється вхідне значення (в даному випадку appTypingAnimation).
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTypingAnimation']) {
      // коли змінюється текст для анімації, ми викликаємо метод typeText, який відповідає за анімацію друку
      this.typeText();
    }
  }
  private typeText(): void {
    // отримуєм доступ до тексту через this.appTypingAnimation
    const text = this.appTypingAnimation;
    // розбиваємо його на масив символів за допомогою split('')
    const textArray = text.split('');
    // this.el.nativeElement - це DOM елемент, до якого застосовується директива.
    // Ми очищуємо його вміст перед початком анімації.
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '');

    // Використовуємо RxJS для створення анімації друку.
    // from(textArray) створює потік, який видає кожен символ по черзі з затримкою, визначеною typingSpeed.
    from(textArray)
      .pipe(concatMap((char) => of(char).pipe(delay(this.typingSpeed))))
      .subscribe({
        next: (char) => {
          this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            this.el.nativeElement.innerHTML + char,
          );
        },
      });
  }
}
