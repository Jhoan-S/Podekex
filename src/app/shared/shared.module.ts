import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const components = [HeaderComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule],
  exports: [...components],
  declarations: [...components],
})
export class SharedModule { }
