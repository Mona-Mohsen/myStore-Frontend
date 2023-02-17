import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct,qty } from 'src/app/models/CartProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() product!: CartProduct;
  @Output() addProduct: EventEmitter<CartProduct> = new EventEmitter();
  quantity: number = 1;
  Qty:number[]=qty

  constructor(private productsService: ProductsService, private cartService:CartService) {}

  ngOnInit(): void {}

  onSubmit(cartProduct: CartProduct): void {
    cartProduct.quantity = this.quantity;
    this.addProduct.emit(cartProduct);
    alert(` '${this.product.name}' is added to cart`);
    this.quantity = 1;
  }

  addproducts(product: CartProduct) {
    this.cartService.addProduct(product);
  }
}
