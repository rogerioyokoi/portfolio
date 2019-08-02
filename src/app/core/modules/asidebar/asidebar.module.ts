import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { AsidebarComponent } from './pages';

import {
  AsidebarHeaderComponent
} from './components';

@NgModule({
  declarations: [
    AsidebarComponent,
    AsidebarHeaderComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AsidebarComponent
  ]
})

export class AsidebarModule { }
