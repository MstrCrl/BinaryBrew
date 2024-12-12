import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-component1',
  templateUrl: './product-card-component1.component.html',
  styleUrls: ['./product-card-component1.component.scss'],
})
export class ProductCardComponent1Component {
  @Input() productName1: string = '';
  @Input() productPrice1: string = '';
  @Input() productImage1: string = '';
  @Input() rating1: number = 0;
  @Input() isFavorite1: boolean = false;

  toggleFavorite() {
    this.isFavorite1 = !this.isFavorite1;
  }
}
