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
