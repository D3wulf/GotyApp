import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficaComponent } from './grafica/grafica.component';






@NgModule({
  declarations: [
    NavbarComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule 
   
    
  ],
  exports:[
    NavbarComponent,
    GraficaComponent
  ]
})
export class ComponentsModule { }
