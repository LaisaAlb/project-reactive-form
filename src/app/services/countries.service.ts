import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ICountriesResponse } from "../interfaces/countries-response/countries-response.interface";
import { CountriesList } from "../types/countries-list";

@Injectable({
    providedIn: 'root'
})
export class CountriesServices {
    constructor(
        private readonly _httpClient: HttpClient
    ){}

    getCountries(): Observable<CountriesList>{
        return this._httpClient.get<ICountriesResponse>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
            map((countriesResponse) => {
                return countriesResponse.data;
            })
        ); 
    }

    // Manipulando para receber apenas a data , que é o que me interessa da chamada. Foz isso com o pipe
    // Esse '.data' é justamente a propriedad que eu quero 
}