import { Injectable } from "@angular/core";
import { IUserForm } from "../interfaces/use-form.interface";

@Injectable({
    providedIn: 'root'     
})
export class userFormRawValueService{
    userFormRawValue: IUserForm = {} as IUserForm
}