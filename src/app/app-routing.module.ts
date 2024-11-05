import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ContainerComponent } from './container/container.component';

const routes: Routes = [
//   { path: '', component: ContainerComponent },
//   { path: 'invalid', component: NotFoundComponent },
  { path: '**', redirectTo: 'invalid' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
