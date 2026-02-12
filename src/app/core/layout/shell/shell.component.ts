import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {}
