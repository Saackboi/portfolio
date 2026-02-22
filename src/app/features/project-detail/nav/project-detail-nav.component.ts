import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './project-detail-nav.component.html',
  styleUrl: './project-detail-nav.component.css'
})
export class ProjectDetailNavComponent {
  @Input() code = '';
}
