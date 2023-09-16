import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // private productId: number;
  // private productName: string;
  // private productPrice: number;
  // private productRemain: number;
  // private productUnit: string;
  // private productDescription: string;
  // private productNote: string;
  productId = 1;
  productName = "ตำปู";
  productPrice = 50;
  productRemain = 3;
  productUnit = "กล่อง";
  productDescription = "กล่องละ 50 ถ้าขายแยก 10ตัว 1 บาท ตัวเดียว 5 บาท นอกนั้นไม่ขาย";
  productNote = "-";
  // private productName: string;
  // private productPrice: number;
  // private productRemain: number;
  // private productUnit: string;
  // private productDescription: string;
  // private productNote: string;
  private prodductIdList = ['1'];

  constructor(){

  }
  ngOnInit(){
    this.productId = 1
    this.productName = "ตำปู";
    this.productPrice = 50;
    this.productRemain = 3;
    this.productUnit = "กล่อง";
    this.productDescription = "กล่องละ 50 ถ้าขายแยก 10ตัว 1 บาท ตัวเดียว 5 บาท นอกนั้นไม่ขาย";
    this.productNote = "-";
  }
}
