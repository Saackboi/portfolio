import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';

@Component({
  selector: 'app-loading-sketch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './loading-sketch.component.html',
  styleUrl: './loading-sketch.component.css',
  standalone: true
})
export class LoadingSketchComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly phrases = [
    'Bocetando...',
    'Entintando...',
    'Trazando lineas...',
    'Cargando ideas...',
    'Ajustando el lápiz...',
    'Preparando escena...',
    'Ajustando la brújula...',
  ];

  private readonly phraseIndex = signal(0);

  protected readonly phrase = computed(() =>
    this.phrases[this.phraseIndex()]
  );

  constructor() {
    const intervalId = setInterval(() => {
      const nextIndex = Math.floor(Math.random() * this.phrases.length);
      this.phraseIndex.set(nextIndex);
    }, 1100);

    this.destroyRef.onDestroy(() => clearInterval(intervalId));
  }
}
