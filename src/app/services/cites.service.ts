import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ICitesResponse } from "../interfaces/cites-response/cites-response.interface";
import { CitiesList } from "../types/cities-list";

@Injectable({
    providedIn: 'root'
})
export class CitesServices {
    constructor(
        private readonly _httpClient: HttpClient
    ){}

    getCites(countryName: string, statesName: string): Observable<CitiesList>{
        return this._httpClient.post<ICitesResponse>('https://countriesnow.space/api/v0.1/countries/state/cities', 
            {
                country: countryName, 
                state: statesName 
            }
        ).pipe(
            map((citesResponse) =>{
                return citesResponse.data
            })
        ); 
    }
}