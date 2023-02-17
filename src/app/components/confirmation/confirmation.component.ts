import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {
  order!: Order;

  constructor(private OrderService: OrderService) {}

  ngOnInit(): void {
    this.order = this.OrderService.getOrder();
  }

}