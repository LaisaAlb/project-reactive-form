import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-informations-edit',
  templateUrl: './contact-informations-edit.component.html',
  styleUrl: './contact-informations-edit.component.scss'
})
export class ContactInformationsEditComponent {
  @Input({ required: true }) userForm!: FormGroup
}
