import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './autenticacion/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent, data: {titulo: 'Inicio'} } ,
  {path: 'cursos', data: {titulo: 'Cursos', url: '/cursos', breadcrumb: true}, loadChildren: '../app/courses/courses.module#CoursesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
