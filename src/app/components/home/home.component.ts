import {
  Component,
  OnInit,
} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bannersData = [];
  categories = [];
  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.productservice.fetchBanners().subscribe((res: any) => {
      this.bannersData = res;
    });

    this.productservice.fetchCategories().subscribe((res: any) => {
      this.categories = res;
      this.categories.sort((a, b) =>
        a.order > b.order ? 1 : b.order > a.order ? -1 : 0
      );
    });
  }
}
