import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PanelComponent } from './panel/panel.component';
import { CommonsModule } from '../commons/commons.module';
import { ListadoCursosComponent } from './cursos/listado-cursos/listado-cursos.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {path: '', data: {titulo: 'Administración', breadcrumb: false}, component: PanelComponent},
  {path: 'cursos', data: {titulo: 'Listado de Cursos', breadcrumb: true, url: 'panel/cursos'}, component: ListadoCursosComponent},
  {path: 'crear-curso', data: {titulo: 'Nuevo Curso', breadcrumb: true, url: 'panel/crear-curso'}, component: CrearCursoComponent},
  {path: 'usuarios', data: {titulo: 'Listado de Usuarios', breadcrumb: true, url: 'panel/usuarios'}, component: ListadoUsuariosComponent},
  {path: 'crear-usuario', data: {titulo: 'Nuevo Usuario', breadcrumb: true, url: 'panel/crear-usuario'}, component: CrearUsuarioComponent},
  // {path: 'tableau', data: {titulo: 'Business Intelligence con Tableau Software', breadcrumb: true, url: 'cursos/tableau'}, children: [
  //   {path: 'tableau-introduccion', data: {titulo: 'Introducción', breadcrumb: true, url: '/tableau-introduccion'}, component: IntroduccionComponent},
  //   {path: 'tableau-instalacion', data: {titulo: 'Instalación', breadcrumb: true, url: '/tableau-instalacion'}, component: ScormLessonComponent}
  // ]},
];

@NgModule({
  declarations: [
    PanelComponent, 
    ListadoCursosComponent,
    CrearCursoComponent,
    ListadoUsuariosComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
