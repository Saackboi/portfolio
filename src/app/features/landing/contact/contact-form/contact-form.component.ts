import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type ContactFormGroup = {
  nombre: FormControl<string>;
  correo: FormControl<string>;
  mensaje: FormControl<string>;
};

@Component({
  selector: 'app-contact-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  protected readonly form = new FormGroup<ContactFormGroup>({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    correo: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    mensaje: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.form.reset();
  }
}
