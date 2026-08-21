import { computed, Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore/lite';


import { environment } from '../../../environments/environment';
import { PortfolioPayload, ProjectCard, TechCategory } from '../models/portfolio-content.model';

@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  private readonly app = initializeApp(environment.firebase);
  private readonly db = getFirestore(this.app);
  private readonly emptyPayload: PortfolioPayload = { projects: [], techStack: [] };

  private readonly data = signal<PortfolioPayload>(this.emptyPayload);
  private readonly loadingState = signal(true);
  private readonly loadedState = signal(false);

  readonly projects = computed(() =>
    this.data().projects
  );

  readonly techStack = computed(() =>
    this.data().techStack
  );

  readonly loading = computed(() =>
    this.loadingState()
  );

  async load(minDurationMs = 0): Promise<void> {
    if (this.loadedState()) {
      return;
    }

    this.loadingState.set(true);
    const start = Date.now();

    try {
      // 1. Obtener proyectos ordenados
      const projectsQuery = query(collection(this.db, 'projects'), orderBy('order', 'asc'));
      const projectsSnap = await getDocs(projectsQuery);
      const projects = projectsSnap.docs.map(doc => doc.data() as ProjectCard);

      // 2. Obtener stack tecnológico ordenado
      const techQuery = query(collection(this.db, 'techStack'), orderBy('order', 'asc'));
      const techSnap = await getDocs(techQuery);
      const techStack = techSnap.docs.map(doc => doc.data() as TechCategory);

      this.data.set({
        projects: projects.length > 0 ? projects : this.emptyPayload.projects,
        techStack: techStack.length > 0 ? techStack : this.emptyPayload.techStack
      });
    } catch (error) {
      console.error('Error al cargar contenido desde Firestore:', error);
      this.data.set(this.emptyPayload);
    } finally {
      if (minDurationMs > 0) {
        await this.ensureMinimumDelay(start, minDurationMs);
      }
      this.loadingState.set(false);
      this.loadedState.set(true);
    }
  }


  private async ensureMinimumDelay(startTime: number, minDurationMs: number): Promise<void> {
    const elapsed = Date.now() - startTime;
    if (elapsed < minDurationMs) {
      await new Promise(resolve => setTimeout(resolve, minDurationMs - elapsed));
    }
  }
}


