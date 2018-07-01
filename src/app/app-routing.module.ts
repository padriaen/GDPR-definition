import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GdprComponent } from './gdpr/gdpr.component';

const routes: Routes = [
  {
    path: '',
    component: GdprComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
