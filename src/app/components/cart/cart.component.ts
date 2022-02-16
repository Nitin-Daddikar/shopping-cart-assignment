import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  itemsInCart = []

  constructor(public Productservice: ProductService) {}

  ngOnInit() {
    this.itemsInCart = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [];
    this.Productservice.cartProducts$.subscribe((res: any) => {
      this.itemsInCart = res;
    });
    this.Productservice.setFooterStatus(true);
  }

  ngOnDestroy() {
    this.Productservice.setFooterStatus(true);
  }
}
