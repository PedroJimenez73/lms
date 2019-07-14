import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PortadaTableuComponent } from './portada-tableu/portada-tableu.component';
import { IntroduccionComponent } from './tableau/introduccion/introduccion.component';
import { ScormLessonComponent } from './tableau/scorm-lesson/scorm-lesson.component';
import { CommonsModule } from '../commons/commons.module';

const routes: Routes = [
  {path: '', data: {titulo: 'Cursos', breadcrumb: false}, component: HomeComponent},
  {path: 'tableau', data: {titulo: 'Business Intelligence con Tableau Software', breadcrumb: true, url: 'cursos/tableau'}, component: PortadaTableuComponent},
  {path: 'tableau', data: {titulo: 'Business Intelligence con Tableau Software', breadcrumb: true, url: 'cursos/tableau'}, children: [
    {path: 'tableau-introduccion', data: {titulo: 'Introducción', breadcrumb: true, url: '/tableau-introduccion'}, component: IntroduccionComponent},
    {path: 'tableau-instalacion', data: {titulo: 'Instalación', breadcrumb: true, url: '/tableau-instalacion'}, component: ScormLessonComponent}
  ]},
];

@NgModule({
  declarations: [
    HomeComponent, 
    PortadaTableuComponent, 
    IntroduccionComponent, 
    ScormLessonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonsModule
  ]
})
export class CoursesModule { }
