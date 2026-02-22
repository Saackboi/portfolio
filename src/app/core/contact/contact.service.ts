import { Injectable, inject } from '@angular/core';
import emailjs from '@emailjs/browser';

import { AppConfigService } from '../services/app-config.service';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly appConfig = inject(AppConfigService);

  async send(form: HTMLFormElement): Promise<void> {
    const serviceId = this.appConfig.emailJsServiceId();
    const templateId = this.appConfig.emailJsTemplateId();
    const publicKey = this.appConfig.emailJsPublicKey();

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS config missing.');
    }

    await emailjs.sendForm(serviceId, templateId, form, { publicKey });
  }
}
