import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface CartItem {
  imageUrl: string;
  name: string;
  amount: number;
  price: number;
  selected: boolean;
}


@Component({
  selector: 'app-shop_history',
  templateUrl: './phone_shopHistory.component.html',
  styleUrls: ['./phone_shopHistory.component.scss']
})

export class PhoneShopHistoryComponent {
  constructor(private router: Router) {}
  cartItems: CartItem[] = [
    { name: 'Wireless Rechargable Keyboard', amount: 2, imageUrl: '../../../../assets/shop_cart/keyboard.png', price: 40, selected: false },
    { name: 'Hudabeauty Bullet Lipstick', amount: 2, imageUrl: '../../../../assets/shop_cart/lipstick.png', price: 15, selected: false },
    { name: 'Vtamin C Cream', amount: 1, imageUrl: '../../../../assets/shop_cart/cream.png', price: 17, selected: false },
    { name: 'Leather Wallet', amount: 1, imageUrl: '../../../../assets/shop_cart/wallet.png', price: 30, selected: false },
    { name: 'Hibiscus Mushrooms', amount: 2, imageUrl: '../../../../assets/shop_cart/mushroom.png', price: 4, selected: false },
    { name: 'COSRX Ultra Moisturizing', amount: 1, imageUrl: '../../../../assets/shop_cart/moisture.png', price: 28, selected: false },
    { name: 'Mini Outdoor Wireless Speaker', amount: 1, imageUrl: '../../../../assets/shop_cart/minispeaker.png', price: 39, selected: false }
  ];

  increment(item: CartItem): void {
    item.amount++;
  }

  decrement(item: CartItem): void {
    if (item.amount > 1) {
      item.amount--;
    }
  }

  toggleSelection(item: CartItem): void {
    item.selected = !item.selected;
  }

  deleteSelectedItems(): void {
    this.cartItems = this.cartItems.filter(item => !item.selected);
  }

  goToAccountPage(): void {
    this.router.navigate(['/phone_account']);
  }

  goToPhoneDeleteCart(): void {
    this.router.navigate(['/phone_cart_delete']);
  }

}
