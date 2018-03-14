import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadListComponent } from './bread/bread-list/bread-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/bread', pathMatch: 'full'},
  { path: 'bread', component: BreadListComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
