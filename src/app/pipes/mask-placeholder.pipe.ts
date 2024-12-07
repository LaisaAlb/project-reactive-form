import { Pipe, PipeTransform } from '@angular/core';
import { PhoneTypeEnum } from '../enums/phone-type.enum';

@Pipe({
  name: 'maskPlaceholder'
})
export class MaskPlaceholderPipe implements PipeTransform {

  transform(phoneType: number): string {
    const phoneMaskMap = {
      [PhoneTypeEnum.RESIDENTIAL]: '+55 11 1234-1234',
      [PhoneTypeEnum.MOBILE]: '+55 11 91234-1234',
      [PhoneTypeEnum.EMERGENCY]: '+55 11 1234-1234 ou +55 11 91234-1234',
    }
    return phoneMaskMap[phoneType as PhoneTypeEnum]
  }
}


