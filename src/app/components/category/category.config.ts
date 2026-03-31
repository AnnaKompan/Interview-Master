export interface QuestionItem {
  // поля таблиці
  id: number;
  question: string;
  // необовязкова поле(?)
  answer?: string;
}

export const MOCK_DATA: QuestionItem[] = [
  {
    id: 1,
    question: 'Can you explain what is Angular?',
    answer:
      'Angular is a popular front-end web application framework developed by Google. It is used for building dynamic and responsive web applications',
  },
  {
    id: 2,
    question: 'What are the key features of Angular?',
    answer:
      'Some key features of Angular include: Component-based architecture, Two-way data binding, Dependency injection, Directives, Services, Routing, and a powerful CLI (Command Line Interface) for development.',
  },
  {
    id: 3,
    question: 'How does Angular handle data binding?',
    answer:
      'Angular provides two-way data binding, which means that changes in the UI are automatically reflected in the component’s data model and vice versa. This is achieved through the use of directives such as ngModel.',
  },
  {
    id: 4,
    question: 'What is a component in Angular?',
    answer:
      'A component in Angular is a fundamental building block of the application. It consists of a TypeScript class that defines the behavior and data of the component, an HTML template that defines the view, and optional CSS styles for styling the component.',
  },
  {
    id: 5,
    question: 'What is dependency injection in Angular?',
    answer:
      'Dependency injection is a design pattern used in Angular to manage the dependencies of components and services. It allows you to inject dependencies into a component or service rather than creating them directly, which promotes modularity and testability.',
  },
  {
    id: 6,
    question: 'What are directives in Angular?',
    answer:
      'Directives in Angular are special markers in the DOM that tell Angular to do something with a DOM element. There are three types of directives: Component directives, Structural directives (e.g., *ngIf, *ngFor), and Attribute directives (e.g., ngClass, ngStyle).',
  },
  {
    id: 7,
    question: 'How does Angular handle routing?',
    answer:
      'Angular uses the Angular Router to handle routing in single-page applications. It allows you to define routes and navigate between different views or components based on the URL.',
  },
  {
    id: 8,
    question: 'What is the Angular CLI?',
    answer:
      'The Angular CLI (Command Line Interface) is a powerful tool that helps developers create, build, and manage Angular applications. It provides commands for generating components, services, and other code scaffolding, as well as for running tests and building the application for production.',
  },
  {
    id: 9,
    question: 'What is the difference between Angular and AngularJS?',
    answer:
      'Angular (also known as Angular 2+) is a complete rewrite of AngularJS. Angular uses TypeScript, a statically typed superset of JavaScript, while AngularJS uses JavaScript. Angular has a component-based architecture, while AngularJS uses a scope-based architecture. Additionally, Angular has improved performance and a more modern development experience compared to AngularJS.',
  },
  {
    id: 10,
    question: 'How do you handle forms in Angular?',
    answer:
      'Angular provides two approaches for handling forms: Template-driven forms and Reactive forms. Template-driven forms are based on directives in the template, while Reactive forms are based on a more programmatic approach using FormControl and FormGroup classes.',
  },
];
