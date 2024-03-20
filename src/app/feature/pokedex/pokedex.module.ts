import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { PokedexRoutingModule } from './pokedex-routing.module';

// Components
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';

const components = [
  ListComponent,
  DetailComponent,
  PokeCardComponent,
  CardWrapperComponent
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
    PokedexRoutingModule
  ],
  exports: [...components],
  declarations: [...components],
})
export class PokedexModule { }
