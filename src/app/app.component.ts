import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Personal online', url: '/folder/Outbox', icon: 'body' },
    { title: 'Programas', url: '/folder/Favorites', icon: 'play' },
    { title: 'Sair', url: '/folder/Archived', icon: 'arrow-back' },
  ];
  constructor() {}
}
