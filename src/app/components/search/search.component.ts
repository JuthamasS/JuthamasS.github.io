import { Component , OnInit ,Input, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productId = 1;
  @Input("childCount") count = 0;
  @Output() onClearCount = new EventEmitter<number>();

  searchProduct(id:number){
    console.log(this.productId);
  }
  ngOnInit() {
    console.log("search");
  }
  clearCount(){
    this.onClearCount.emit(0);
  }
}
