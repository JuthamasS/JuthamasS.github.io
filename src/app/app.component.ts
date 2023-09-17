import { Component } from '@angular/core';

@Component({
   selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ShopName = 'LastguyShop';
  i:number = 0;
  products = ['nail','hammer','saw','sling'];
  parentCount = 0;
  product!: Product;
  str!: string;

  ngOnInit(){
    this.product = new Product();
  }
  onSubmit(){
    this.str ="ค่าจากการค้นหา : " + JSON.stringify(this.product);
    window.alert(this.str);
  }
  showShopName(){
    return this.ShopName;
  }
  addCount(){
    this.i++;
  }
  getProductDetail(value:string){
    console.log(value);
  }
  SearchProduct(){
    this.parentCount = this.parentCount + 1;
  }
 }

 class Product {
  productName:string;
  constructor(parameters="123") {
    this.productName = parameters;
  }
}
