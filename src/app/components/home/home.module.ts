import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ])
    ],
    declarations: [
        HomeComponent,
        CarouselComponent,
        CategoriesComponent
    ]
})
export class HomeModule { }
