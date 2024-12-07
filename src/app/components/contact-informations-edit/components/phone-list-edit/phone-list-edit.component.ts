import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-phone-list-edit',
  templateUrl: './phone-list-edit.component.html',
  styleUrl: './phone-list-edit.component.scss'
})
export class PhoneListEditComponent { //implements OnInit{
  // Para teste, utiliza-se: 
  // meuInput: FormControl = new FormControl('', Validators.required)

  // ngOnInit(): void {
  //   this.meuInput.valueChanges.subscribe(console.log)
  // }
  // Aqui, especifica verifica o que tá retornando no console. E no html passa:
  // [formControlName]="meuInput"

  @Input({ required: true }) userForm!: FormGroup

  get phoneList(): FormArray{
     return this.userForm.get('contactInformations.phoneList') as FormArray
  }

}
