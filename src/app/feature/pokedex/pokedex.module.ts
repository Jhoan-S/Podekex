import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { SharedModule } from '../../shared/shared.module';

const components = [
  ListComponent,
  DetailComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PokedexRoutingModule
  ],
  exports: [...components],
  declarations: [...components],
})
export class PokedexModule { }
