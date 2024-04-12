import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  textToCopy: string = '';
  copyToClipboard(inputField: HTMLInputElement) {
    inputField.select();
    document.execCommand('copy');
  }
}
