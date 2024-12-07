import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from "@angular/common";
import { GeneralInformationsComponent } from './general-informations/general-informations.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';
import { PhoneListComponent } from './contact-informations/components/phone-list/phone-list.component';
import { AddressListComponent } from './contact-informations/components/address-list/address-list.component';
import { DependentsListComponent } from './dependents-list/dependents-list.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { UserInformationsContainerComponent } from './user-informations-container/user-informations-container.component';
import { GeneralInformationsEditComponent } from './general-informations-edit/general-informations-edit.component';
import { ContactInformationsEditComponent } from './contact-informations-edit/contact-informations-edit.component';
import { PhoneListEditComponent } from './contact-informations-edit/components/phone-list-edit/phone-list-edit.component';
import { AddressListEditComponent } from './contact-informations-edit/components/address-list-edit/address-list-edit.component';
import { DependentsListEditComponent } from './dependents-list-edit/dependents-list-edit.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
    declarations: [
      UsersListComponent,
      GeneralInformationsComponent,
      UserInfoItemComponent,
      ContactInformationsComponent,
      PhoneListComponent,
      AddressListComponent,
      DependentsListComponent,
      ButtonsContainerComponent,
      UserInformationsContainerComponent,
      GeneralInformationsEditComponent,
      ContactInformationsEditComponent,
      PhoneListEditComponent,
      AddressListEditComponent,
      DependentsListEditComponent,
      ConfirmationDialogComponent
    ],

    imports: [
      AngularMaterialModule,
      PipesModule, 
      CommonModule, 
      ReactiveFormsModule,
      NgxMaskDirective
    ], 

    exports: [
      UsersListComponent,
      GeneralInformationsComponent,
      ContactInformationsComponent,
      DependentsListComponent,
      ButtonsContainerComponent,
      UserInformationsContainerComponent,
      ConfirmationDialogComponent
    ],
    providers: [
      provideNgxMask()
    ]
})
export class ComponentsModule {}