import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { StockComponent } from './components/stock/stock.component';
import { TableComponent } from './components/table/table.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'',redirectTo: '/search', pathMatch:'full'},
  {path:'search',component: SearchComponent},
  {path:'stock',component: StockComponent},
  {path:'table',component: TableComponent},
  {path:'product',component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
