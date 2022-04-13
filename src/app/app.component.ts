import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public toggleTheme(self: HTMLSpanElement) {
    self.innerText =
      self.innerText === 'dark_mode' ? 'light_mode' : 'dark_mode';

    document.body.classList.toggle('dark-theme');
  }
}
