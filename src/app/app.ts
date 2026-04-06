import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeftSideMenu } from './components/left-side-menu/left-side-menu';
import { UserPanel } from './components/user-panel/user-panel';
import { TopMenu } from './components/top-menu/top-menu';
import { Preparation } from './components/preparation/preparation';
import { PageNotFound } from './components/page-not-found/page-not-found';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, MatToolbarModule, LeftSideMenu, Preparation, TopMenu, UserPanel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Interview-Master');
}
