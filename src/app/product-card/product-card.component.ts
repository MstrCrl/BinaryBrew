import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productName: string = 'Default Product Name';
  @Input() productImage: string = 'assets/default-image.png';
  @Input() productPrice: string = '$0.00';
  @Input() productRating: number = 0;

  @Input() isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
