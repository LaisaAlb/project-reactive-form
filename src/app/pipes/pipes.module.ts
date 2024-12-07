import { NgModule } from "@angular/core";
import { MaritalStatusPipe } from "./marital-status.pipe";
import { CpfPipe } from './cpf.pipe';
import { PhoneMaskPipe } from "./phone-mask.pipe";
import { MaskPlaceholderPipe } from './mask-placeholder.pipe'; 

@NgModule({
    declarations: [
        MaritalStatusPipe,
        CpfPipe,
        PhoneMaskPipe,
        MaskPlaceholderPipe
    ],
    exports: [
        MaritalStatusPipe,
        CpfPipe,
        PhoneMaskPipe,
        MaskPlaceholderPipe
    ]
})
export class PipesModule {}