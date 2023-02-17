import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartProduct, qty } from 'src/app/models/CartProduct';

import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {

  product!: CartProduct;
  quantity: number = 1;
  Qty: number[] = qty;
  id!: number 
  products: CartProduct[]= [];
  
  constructor(private route: ActivatedRoute,private productsService: ProductsService,private cartService: CartService) {}

  ngOnInit(): void {
    try{
        this.route.paramMap.subscribe(params => {this.id = Number(params.get('id')); })

        this.productsService.getProducts().subscribe(prod =>{
          this.products = prod;
          this.product = this.products.filter(product => product.id === this.id)[0];
        })
      }
    catch(err)
      {
        throw new Error(`could not find product `+ err);
      }
  }
 
  onSubmit(item: CartProduct): void {
    item.quantity = this.quantity;
    this.cartService.addProduct(item);
    alert(` ${this.product.name} is added`);
    this.quantity = 1;
  } 
}
