import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesServices } from '../../services/countries.service';
import { distinctUntilChanged, Subscription, take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges {
  currentTabIndex: number = 0
  
  countriesList: CountriesList = []
  statesList: StatesList = []

  userFormValueChangesSubs!: Subscription

  private readonly _countriesService = inject(CountriesServices)
  private readonly _statesService = inject(StatesService)

  @Input({ required: true }) isInEditMode: boolean = false
  @Input({ required: true }) userSelected: IUser = {} as IUser

  @Output('onFormStatusChange') onFormStatusChangeEmitt = new EventEmitter<boolean>()
  @Output('onUserFormFirstChange') onUserFormFirstChangeEmitt = new EventEmitter<void>()

  ngOnInit() {
    this.onUserFormStatusChange()
    this.getCountriesList()
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0
    
    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0
    
    if(HAS_USER_SELECTED) {
      if(this.userFormValueChangesSubs) this.userFormValueChangesSubs.unsubscribe()
      this.fulfillUserForm(this.userSelected)

      this.onUserFormFirstChange()
      
      this.getStatesList(this.userSelected.country)
    }
  }


  onCountrySelected(countryName: string) {
    this.getStatesList(countryName)
  }

  onUserFormStatusChange() {
    this.userForm.statusChanges.pipe(distinctUntilChanged()).subscribe(() => this.onFormStatusChangeEmitt.emit(this.userForm.valid))
  }
  
  private getStatesList(country: string) {
    this._statesService.getStates(country).pipe(take(1)).subscribe((statesList: StatesList) => {
      this.statesList = statesList
    })
  }
  
  private getCountriesList() {
    this._countriesService.getCountries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
      this.countriesList = countriesList
    })
  }
  
  private onUserFormFirstChange() {
    this.userFormValueChangesSubs = this.userForm.valueChanges.pipe(take(1)).subscribe(() => this.onUserFormFirstChangeEmitt.emit())
  }
}
