import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-common',
  templateUrl: './cart-common.component.html',
  styleUrls: ['./cart-common.component.scss']
})
export class CartCommonComponent implements OnInit {
  @Input() itemsInCart = [];
  @Input() activeModalObj : NgbActiveModal = null;
  cartValue = 0;

  constructor(public Productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.Productservice.cartProducts$.subscribe((res: any) => {
      this.itemsInCart = res;
      this.updateCartValue();
    });
    this.updateCartValue();
  }

  updateCartValue () {
    this.cartValue = this.itemsInCart.reduce(function (prev, cur) {
      return prev + cur.price * cur.quantity;
    }, 0);
  }

  proceedCheckou() {
    if(this.activeModalObj) {
      this.activeModalObj.dismiss('Cross click');
    }
    this.router.navigate(['/home']);
  }

}
