import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaritalStatusEnum } from "../enums/marital-status.enum";
import { PhoneTypeEnum } from "../enums/phone-type.enum";
import { AddressTypeEnum } from "../enums/address-type.enum";
import { UsersListResponse } from "../types/users-list-response";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    private readonly usersList: UsersListResponse = [
        {
            name: 'Fulano',
            email: 'fulano@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.SINGLE, // -> Estado Civil // -> Solteiro
            monthlyIncome: 5000, // -> Renda Mensal
            birthDate: '25/02/1991',
            phoneList: [
                {
                    type: PhoneTypeEnum.RESIDENTIAL, // -> Residencial
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '1234-5678', // -> Número
                },
                {
                    type: PhoneTypeEnum.MOBILE, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-2222', // -> Número
                },
                {
                     type: PhoneTypeEnum.EMERGENCY, // -> Emergência
                     areaCode: '11', // -> DDD
                     internationalCode: '+55', // -> DDI
                     number: '93333-4444', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.RESIDENTIAL, // -> Residencial
                    street: 'Rua de Tal',
                    complement: 'Próximo ao parque',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Ribeirão Preto',
                },
                {
                     type: AddressTypeEnum.WORK, // -> Trabalho
                     street: 'Avenida de Tal',
                     complement: 'Próximo ao centro comercial',
                     country: 'Brazil',
                     state: 'São Paulo',
                     city: 'Santos',
                },
                {
                    type: AddressTypeEnum.ALTERNATIVE, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 12,
                    document: 22011944867,
                },
                {
                    name: 'Fulaninha',
                    age: 9,
                    document: 99988877766,
                },
            ],
        },
        {
            name: 'Laura',
            email: 'laura@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.MARIED, // -> Estado Civil // -> Casada
            monthlyIncome: 6000, // -> Renda Mensal
            birthDate: '12/12/1994',
            phoneList: [
                {
                    type: PhoneTypeEnum.EMERGENCY, // -> Emergência
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '93333-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.WORK, // -> Trabalho
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 5,
                    document: 22011944800,
                }
            ],
        },
        {
            name: 'Marcos',
            email: 'marcos@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.DIVORCED, // -> Estado Civil // -> Divorciado
            monthlyIncome: 7000, // -> Renda Mensal
            birthDate: '11/11/1991',
            phoneList: [
                {
                    type: PhoneTypeEnum.MOBILE, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.ALTERNATIVE, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [],
        }
    ];

    getUsers(): Observable<UsersListResponse>{
        return new Observable<UsersListResponse>((observer) => {
            setTimeout(() => {
                observer.next(this.usersList); 
            }, 500 )
        }); 
    }
}