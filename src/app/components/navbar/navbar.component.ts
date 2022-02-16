import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { CartModalComponent } from '../cart/modal/cart-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCount = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')).length : 0;
  constructor(private Productservice:ProductService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.Productservice.cartProducts$.subscribe((res:any)=>{
      this.cartCount = res.length;
    })
  }

  showMobileMenu(){
    var links = document.getElementById("hamburger-links");
    var bar = document.getElementById("bar");
    if (links.style.display === "block") {
      links.style.display = "none";
      bar.classList.remove('toggle')
    } else {
      links.style.display = "block";
      bar.classList.add('toggle')

    }
  }

  openCartModal() {
    if (window.innerWidth < 768) {
      this.router.navigate(['/cart']);
    } else {
      this.modalService.open(CartModalComponent, { windowClass: 'cart-modal-class' });
    }
  }

}
