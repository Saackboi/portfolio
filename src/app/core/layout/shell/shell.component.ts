import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LoadingSketchComponent } from '../../../shared/loading-sketch/loading-sketch.component';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, LoadingSketchComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
  animations: [
    trigger('fadeOverlay', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))]),
      transition(':leave', [animate('250ms ease-in', style({ opacity: 0 }))])
    ]),
    trigger('fadeContent', [
      transition(':enter', [style({ opacity: 0 }), animate('350ms ease-out', style({ opacity: 1 }))])
    ])
  ]
})
export class ShellComponent implements OnInit {
  private readonly portfolioContent = inject(PortfolioContentService);
  private readonly document = inject(DOCUMENT);

  protected readonly isLoading = this.portfolioContent.loading;

  constructor() {
    effect(() => {
      this.document.body.style.overflow = this.isLoading() ? 'hidden' : '';
    });
  }

  ngOnInit(): void {
    void this.portfolioContent.load(300);
  }
}
