import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProducPageRoutingModule } from './detalle-produc-routing.module';

import { DetalleProducPage } from './detalle-produc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProducPageRoutingModule
  ],
  declarations: [DetalleProducPage]
})
export class DetalleProducPageModule {}
