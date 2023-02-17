import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/CartProduct';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {

  Listproducts!: CartProduct[];
 
  constructor(private http: HttpClient) {}

  getProducts(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>('../assets/data.json');
  }

  setProducts(Listproduct: CartProduct[]) {
    this.Listproducts = Listproduct;
  }
}
