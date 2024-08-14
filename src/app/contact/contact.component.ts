import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  infos_contact = {
    nomComplet: '',
    email: '',
    telephone: '',
    message: '',
  };
  constructor() {}

  ngOnInit(): void {}
  email_envoye() {

      emailjs.init('FuDaN-gCdcWpVEIR8');
      emailjs.send('service_wbwsb1t', 'template_rosqaps', {
        from_name: this.infos_contact.nomComplet,
        to_email: this.infos_contact.email,
        from_phone: this.infos_contact.telephone,
        message: this.infos_contact.message,
      });
      alert('Message envoyé');
      this.infos_contact.nomComplet = '';
      this.infos_contact.email = '';
      this.infos_contact.telephone = '';
      this.infos_contact.message = '';
    }

}
