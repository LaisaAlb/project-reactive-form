import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-list-edit',
  templateUrl: './address-list-edit.component.html',
  styleUrl: './address-list-edit.component.scss'
})
export class AddressListEditComponent {
  @Input({ required: true }) userForm!: FormGroup;

  get addressList(): FormArray {
    return this.userForm.get('contactInformations.addressList') as FormArray;
  }
}
