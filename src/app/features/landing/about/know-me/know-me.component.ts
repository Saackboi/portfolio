import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-know-me',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './know-me.component.html',
  styleUrl: './know-me.component.css'
})
// Static profile card keeps copy identical to the template.
export class KnowMeComponent {}
