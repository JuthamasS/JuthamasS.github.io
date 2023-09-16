import { Component } from '@angular/core';

@Component({
   selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LastguyShop';
  i:number = 0;
  products = ['nail','hammer','saw','sling'];

  showMessage(){
    return this.title;
  }
  addCount(){
    this.i++;
  }
  getProductDetail(value:string){
    console.log(value);
  }

}
