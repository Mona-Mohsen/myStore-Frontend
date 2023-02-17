import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  order!: Order;
  
  constructor() { }

  setOrder(order: Order): void {
    this.order = order;
  }
  
  getOrder(): Order {
    return this.order;
  }
}
