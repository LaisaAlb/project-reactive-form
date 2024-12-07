import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependents-list-edit',
  templateUrl: './dependents-list-edit.component.html',
  styleUrl: './dependents-list-edit.component.scss'
})
export class DependentsListEditComponent {
  @Input({ required: true}) userForm!: FormGroup

  @Output('onRemoveDependents') onRemoveDependentEmitt = new EventEmitter<number>()

  @Output('onAddDependents') onAddDependentEmitt = new EventEmitter<void>()

  get dependentsList(): FormArray {
    return this.userForm.get('dependentsList') as FormArray
  }

  addDependent(){
    this.onAddDependentEmitt.emit()
  }
  
  removeDependent(dependentIndex: number) {
    this.onRemoveDependentEmitt.emit(dependentIndex)
  }
}
