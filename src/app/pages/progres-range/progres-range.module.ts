import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresRangePageRoutingModule } from './progres-range-routing.module';

import { ProgresRangePage } from './progres-range.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresRangePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgresRangePage]
})
export class ProgresRangePageModule {}
