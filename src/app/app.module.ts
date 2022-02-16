import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SortByCategoryPipe } from './pipes/sort-by-category.pipe';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartCommonComponent } from './components/cart/common/cart-common.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { ProductsListingComponent } from './components/products/products-listing/products-listing.component';
import { CartModalComponent } from './components/cart/modal/cart-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    SortByCategoryPipe,
    CartCommonComponent,
    CarouselComponent,
    CategoriesComponent,
    ProductsListingComponent,
    CartModalComponent
  ],
  entryComponents: [CartModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  exports:[NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
