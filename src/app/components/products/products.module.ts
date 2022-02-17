import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { SortByCategoryPipe } from 'src/app/pipes/sort-by-category.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ProductsComponent },
            { path: ':id', component: ProductsComponent }
        ])
    ],
    declarations: [
        ProductsComponent,
        ProductsListingComponent,
        SortByCategoryPipe
    ]
})
export class ProductsModule { }
