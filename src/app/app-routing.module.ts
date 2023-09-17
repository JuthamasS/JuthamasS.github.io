import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [
  {path:'',redirectTo: '/', pathMatch:'full'},
  {path:'search',component: SearchComponent},
  {path:'stock',component: StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
