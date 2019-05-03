import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DynamicNavPage } from './dynamic-nav.page';

const routes: Routes = [
  {
    path: '',
    component: DynamicNavPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DynamicNavPage]
})
export class DynamicNavPageModule {}
