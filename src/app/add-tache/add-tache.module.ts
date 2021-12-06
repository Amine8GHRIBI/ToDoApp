import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTachePageRoutingModule } from './add-tache-routing.module';

import { AddTachePage } from './add-tache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTachePageRoutingModule
  ],
  declarations: [AddTachePage]
})
export class AddTachePageModule {}
