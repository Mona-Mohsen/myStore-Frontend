import { Component, OnInit } from '@angular/core';

import { CartProduct } from 'src/app/models/CartProduct';

import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  listproducts: CartProduct[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
   this.getproducts();
  }

  addproducts(product: CartProduct) {
    this.cartService.addProduct(product);
  } 
    
  getproducts(){
    this.productsService.getProducts().subscribe((productslist) => {
      this.listproducts = productslist;
      this.productsService.setProducts(productslist);
    })
  }
 
}

