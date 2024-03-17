import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

@Component({
  standalone: true,
  imports: [RouterModule, AppShellComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
