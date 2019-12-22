import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListViewComponent } from './components/list-view/list-view.component';


const routes: Routes = [
  { path : "", component: LoginComponent },
  { path : "login", component: LoginComponent },
  { path : "listView", component: ListViewComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
