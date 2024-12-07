import { Component, Input } from '@angular/core';
import { DependentsList } from '../../types/dependents-list';

@Component({
  selector: 'app-dependents-list',
  templateUrl: './dependents-list.component.html',
  styleUrl: './dependents-list.component.scss'
})
export class DependentsListComponent {

 @Input({ required:true }) dependentsList: DependentsList | undefined = [];
 
}
