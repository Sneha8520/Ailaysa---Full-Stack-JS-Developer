import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxListComponent } from './square-management/box-list/box-list.component';
import { BoxComponent } from './square-management/box/box.component';

const routes: Routes = [
  { path: '', redirectTo: 'squarebox', pathMatch: 'full' }, // Redirect to default route
  { path: 'squarebox', component: BoxListComponent },
  { path: 'box/:id', component: BoxComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
