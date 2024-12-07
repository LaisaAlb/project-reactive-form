import { IAddress } from "./user/address.interface";

export interface IAddressToDisplay extends IAddress {
    typeDescription: string;
};
