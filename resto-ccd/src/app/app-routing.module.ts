import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {LoginComponent} from './login/login.component';
import {ResgisterComponent} from './resgister/resgister.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component'
const routes: Routes = [
  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:ListRestoComponent,
    path:'list'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:UpdateRestoComponent,
    path:'update'
  },
  {
    component:ResgisterComponent,
    path:'resgister'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }