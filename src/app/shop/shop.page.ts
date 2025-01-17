import { Component, OnInit } from '@angular/core';

interface Coffee {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  coffeeProducts: Coffee[] = [
    {
      id: 1,
      name: 'Matcha Latte',
      image: 'assets/Images/latte/cafe-latte.png',
      description: 'A perfect blend of premium matcha green tea and silky steamed milk, creating a smooth and energizing experience.',
      price: 4.99,
      quantity: 1
    },
    {
      id: 2,
      name: 'Coffee Latte',
      image: 'assets/Images/latte/cafe-latte.png',
      description: 'Our signature espresso harmoniously combined with creamy steamed milk and a delicate layer of foam.',
      price: 4.49,
      quantity: 1
    },
    {
      id: 3,
      name: 'French Vanilla Latte',
      image: 'assets/Images/latte/cafe-latte.png',
      description: 'Rich espresso mixed with steamed milk and natural French vanilla flavoring for a subtly sweet comfort.',
      price: 4.99,
      quantity: 1
    },
    {
      id: 4,
      name: 'Australian Chocolate Latte',
      image: 'assets/Images/latte/cafe-latte.png',
      description: 'Premium espresso blended with steamed milk and authentic Australian chocolate for a rich, indulgent experience.',
      price: 5.49,
      quantity: 1
    }
  ];

  selectedCoffee = this.coffeeProducts[0];

  constructor() {}

  ngOnInit() {}

  selectCoffee(coffee: Coffee) {
    this.selectedCoffee = coffee;
  }

}
