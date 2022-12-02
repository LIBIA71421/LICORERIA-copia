import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LicoreriasComponent} from "./licorerias/licorerias.component";
import {LicoreriaDetailComponent} from "./licoreria-detail/licoreria-detail.component";
import {LicoreriaSearchComponent} from "./licoreria-search/licoreria-search.component";
import {FacturacionesComponent} from "./facturaciones/facturaciones.component";
import {VinosComponent} from "./vinos/vinos.component";
import {FacturacionDetailComponent} from "./facturacion-detail/facturacion-detail.component";
import {VinoDetailComponent} from "./vino-detail/vino-detail.component";

const routes: Routes = [
  {path: 'licorerias',component: LicoreriasComponent},
  {path: 'detail/:id', component: LicoreriaDetailComponent },
  {path: 'detail/:id', component: FacturacionDetailComponent },
  {path: 'detail/:id', component: VinoDetailComponent },
  {path: 'search', component: LicoreriaSearchComponent},
  {path: 'facturacion', component: FacturacionesComponent},
  {path: 'vinos', component: VinosComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
