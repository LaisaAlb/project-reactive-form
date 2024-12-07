export interface IUserForm {
    generalInformations: IUserFormGeneralInformations;
    contactInformations: IUserFormContactInformations;
    dependentsList: IUserFormDependent[];
  }
  
  export interface IUserFormGeneralInformations {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: Date;
  }
  
  export interface IUserFormContactInformations {
    phoneList: IUserFormPhone[];
    addressList: IUserFormAddress[];
  }
  
  export interface IUserFormPhone {
    type: number;
    typeDescription: string;
    number: string;
  }
  
  export interface IUserFormAddress {
    type: number;
    typeDescription: string;
    street: string;
    complement: string;
    country: string;
    state: string;
    city: string;
  }
  
  export interface IUserFormDependent {
    name: string;
    age: string;
    document: string;
  }
  