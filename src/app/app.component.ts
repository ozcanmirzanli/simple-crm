import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SharedModule } from './shared-module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simple-crm';
}
