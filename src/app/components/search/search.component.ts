import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productId = 1;

  searchProduct(id:number){
    console.log(this.productId);
  }
  ngOnInit(): void {
    
  }
}
