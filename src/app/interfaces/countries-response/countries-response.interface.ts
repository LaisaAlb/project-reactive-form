import { CountriesList } from "../../types/countries-list";
import { IBaseCountriesResponse } from "../base-countries-response.interface";

export interface ICountriesResponse extends IBaseCountriesResponse{
    data: CountriesList;
}