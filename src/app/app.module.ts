import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LicoreriasComponent } from './licorerias/licorerias.component';
import { LicoreriaDetailComponent } from './licoreria-detail/licoreria-detail.component';
import { LicoreriaSearchComponent } from './licoreria-search/licoreria-search.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FacturacionesComponent } from './facturaciones/facturaciones.component';
import { FacturacionDetailComponent } from './facturacion-detail/facturacion-detail.component';
import { FacturacionSearchComponent } from './facturacion-search/facturacion-search.component';
import { VinosComponent } from './vinos/vinos.component';
import { VinoDetailComponent } from './vino-detail/vino-detail.component';
import { VinoSearchComponent } from './vino-search/vino-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LicoreriasComponent,
    LicoreriaDetailComponent,
    LicoreriaSearchComponent,
    FacturacionesComponent,
    FacturacionDetailComponent,
    FacturacionSearchComponent,
    VinosComponent,
    VinoDetailComponent,
    VinoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
