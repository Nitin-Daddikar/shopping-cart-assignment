import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {
  itemsInCart = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }
}
