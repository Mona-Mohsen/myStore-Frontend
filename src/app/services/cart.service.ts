import { Injectable } from '@angular/core';
import { CartProduct} from '../models/CartProduct';

@Injectable({
  providedIn: 'root',
})


export class CartService {
  cartproducts: CartProduct[] = [];
  constructor() {}

  getCart(): CartProduct[] {
    return this.cartproducts;
  }

  setCart(cartproduct: CartProduct[]) {
    this.cartproducts = cartproduct;
  }

  clearCart(): CartProduct[] {
    return this.cartproducts = [];
  }

  addProduct(product:CartProduct){
  
    let proExist=false;
    for (let i = 0; i < this.cartproducts.length; i++) {
      if (this.cartproducts[i].name==product.name){
        this.cartproducts[i].quantity++;
        proExist =true;
      }
    }
    if (!proExist){
      this.cartproducts.push(product);
    }
  }

  getTotalPrice() {
   let totalPrice=0;
   this.cartproducts.forEach(item => totalPrice += item.quantity * item.price);
   return totalPrice;
  }

}
