import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
  async send(form: HTMLFormElement): Promise<void> {
    const serviceId = environment.emailJsServiceId;
    const templateId = environment.emailJsTemplateId;
    const publicKey = environment.emailJsPublicKey;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS config missing.');
    }

    await emailjs.sendForm(serviceId, templateId, form, { publicKey });
  }
}

