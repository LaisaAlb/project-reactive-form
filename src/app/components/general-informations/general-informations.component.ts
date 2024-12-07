import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-general-informations',
  templateUrl: './general-informations.component.html',
  styleUrl: './general-informations.component.scss'
})
export class GeneralInformationsComponent {

  // Para usar esta propriedade você precisa ter certeza. Pq imagina chama 'name.(alguma coisa)' e está vazio?
  @Input({ required: true }) user: IUser | undefined = {} as IUser; 

}
