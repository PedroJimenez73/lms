import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FrisoComponent } from './friso/friso.component';

@NgModule({
  declarations: [
    FrisoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FrisoComponent
  ]
})
export class CommonsModule { }
