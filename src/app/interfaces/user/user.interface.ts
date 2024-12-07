import { PhoneList } from "../../types/phone-list";
import { DependentsList } from "../../types/dependents-list"
import { AddressList } from "../../types/address-list";

export interface IUser {
    name: string;
    email: string,
    country: string; 
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string; 
    phoneList: PhoneList;
    addressList: AddressList;
    dependentsList: DependentsList;
}