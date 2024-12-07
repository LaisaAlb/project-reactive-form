import { MaritalStatusEnum } from "../enums/marital-status.enum";

export const maritalStatusDescriptionMap: { [key in MaritalStatusEnum]: string } = {
    [MaritalStatusEnum.SINGLE]: 'Solteiro',
    [MaritalStatusEnum.MARIED]: 'Casado', 
    [MaritalStatusEnum.DIVORCED]: 'Divorciado'
}

export const maritalStatusArray =  Object.keys(maritalStatusDescriptionMap).map(Number).map((key) => {
    return { code: key , description: maritalStatusDescriptionMap[key as MaritalStatusEnum]}
})

// [
//     { code: 1, description: 'Solteiro' },
//     { code: 2, description: 'Casado' },
//     { code: 3, description: 'Divorciado' },
// ]