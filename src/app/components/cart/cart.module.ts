import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartModalComponent } from './modal/cart-modal.component';
import { CartCommonComponent } from './common/cart-common.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CartComponent,
        CartCommonComponent,
        CartModalComponent
    ],
    entryComponents: [CartModalComponent],
})
export class CartModule { }
