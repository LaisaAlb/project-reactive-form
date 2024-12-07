import { CitiesList } from "../../types/cities-list";
import { IBaseCountriesResponse } from "../base-countries-response.interface";

export interface ICitesResponse extends IBaseCountriesResponse{
    data: CitiesList; 
}