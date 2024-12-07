import { AddressTypeEnum } from "../enums/address-type.enum";
import { IAddressToDisplay } from "../interfaces/address-to-display.interface";
import { IAddress } from "../interfaces/user/address.interface";
import { AddressList } from "../types/address-list";
import { addressTypeDescriptionMap } from "./address-type-description-map";

export const prepareAddressList = (originalUserAddressList: AddressList, isDisplayAddress: boolean, callback: (address: IAddressToDisplay) => void ) => {
    Object.keys(addressTypeDescriptionMap).map(Number).forEach((addressType: number) => {
        const addressFound = originalUserAddressList.find((userAddress) =>userAddress.type === addressType)

        let address = {} as IAddressToDisplay

        if(isDisplayAddress){
            address = returnAddressToDisplay(addressFound, addressType)
        } else {
            address = returnAddressToEdit(addressFound, addressType)
        }
        
        callback({
            ...address, 
        })
    })
}

 const returnAddressToDisplay = (address: IAddress | undefined, addressType: number): IAddressToDisplay => {
    if(!address){
      return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum ], 
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '-',
        city: '-'
      }
    }

    return {
      typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum ], 
      ...address,
    }
  }

  const returnAddressToEdit = (address: IAddress | undefined, addressType: number): IAddressToDisplay => {
    if(!address){
      return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum ], 
        type: addressType,
        street: '',
        complement: '',
        country: '',
        state: '',
        city: ''
      }
    }

    return {
      typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum ], 
      ...address,
    }
  }