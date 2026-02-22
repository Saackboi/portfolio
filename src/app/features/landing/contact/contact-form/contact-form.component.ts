import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactService } from '../../../../core/contact/contact.service';

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
  private readonly contactService = inject(ContactService);
  private readonly cdr = inject(ChangeDetectorRef);
  private statusTimeout: ReturnType<typeof setTimeout> | null = null;

  protected readonly emailTitle = 'Nuevo contacto desde portfolio';
  protected emailTime = '';

  @ViewChild('formRef') private formRef?: ElementRef<HTMLFormElement>;

  protected readonly form = new FormGroup<ContactFormGroup>({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    correo: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    mensaje: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] })
  });

  protected isSending = false;
  protected sendSuccess = false;
  protected sendError = false;
  protected isToastClosing = false;

  protected isInvalid(controlName: keyof ContactFormGroup): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  protected submit(): void {
    this.sendSuccess = false;
    this.sendError = false;
    this.isToastClosing = false;
    this.clearStatusTimeout();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formElement = this.formRef?.nativeElement;
    if (!formElement) {
      this.sendError = true;
      this.cdr.markForCheck();
      return;
    }

    this.emailTime = new Date().toLocaleString('es-PA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    this.isSending = true;
    void this.contactService
      .send(formElement)
      .then(() => {
        this.sendSuccess = true;
        this.form.reset({ nombre: '', correo: '', mensaje: '' });
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.cdr.markForCheck();
        this.scheduleToastDismiss();
      })
      .catch(() => {
        this.sendError = true;
        this.cdr.markForCheck();
        this.scheduleToastDismiss();
      })
      .finally(() => {
        this.isSending = false;
        this.cdr.markForCheck();
      });
  }

  private scheduleToastDismiss(): void {
    this.clearStatusTimeout();
    this.isToastClosing = false;

    this.statusTimeout = setTimeout(() => {
      this.isToastClosing = true;
      this.cdr.markForCheck();
      this.statusTimeout = setTimeout(() => {
        this.sendSuccess = false;
        this.sendError = false;
        this.isToastClosing = false;
        this.statusTimeout = null;
        this.cdr.markForCheck();
      }, 220);
    }, 3200);
  }

  private clearStatusTimeout(): void {
    if (!this.statusTimeout) {
      return;
    }

    clearTimeout(this.statusTimeout);
    this.statusTimeout = null;
  }
}
