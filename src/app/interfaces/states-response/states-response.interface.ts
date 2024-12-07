import { IBaseCountriesResponse } from "../base-countries-response.interface";
import { IStatesResponseData } from "./states-response-data.interface";

export interface IStatesResponse extends IBaseCountriesResponse {
    data: IStatesResponseData
}
