import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from 'src/app/models/order';

import { CartProduct } from 'src/app/models/CartProduct';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 
  order!: Order;
  full_name: string ='';
  address: string ='';
  creditCard: string ='';
  totalPrice: number = 0;

  

  @Input() cartProducts: CartProduct[] = []; 
  constructor( private cartService: CartService, private orderService:OrderService, private route: Router) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
    this.totalPrice=this.cartService.getTotalPrice();
  }

  updateOnChange(prod: CartProduct) {
    if (prod.quantity == 0) {
      this.removeProd(prod);
    }
    this.totalPrice=this.cartService.getTotalPrice();
  }

  removeProd(prod: CartProduct) {
    this.cartProducts = this.cartProducts.filter( (removProd) => removProd.id != prod.id);
    this.cartService.setCart(this.cartProducts);
    alert(`${prod.name} is removed!`)
  }


  onSubmitOrder() {
    this.order={full_name:this.full_name,totalPrice:this.totalPrice,creditCard:this.creditCard}
    this.orderService.setOrder(this.order);
    this.route.navigate(['/confirmation']);
    this.cartProducts = this.cartService.clearCart();
  
  }
}
