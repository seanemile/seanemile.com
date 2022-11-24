import { Component, HostBinding, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private IsDark = true;

  @HostBinding('class')
  get themeClass() {
    return this.IsDark ? 'dark-theme' : 'light-theme';
  }

  constructor() {}
}
