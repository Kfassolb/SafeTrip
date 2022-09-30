import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoComponent } from './page/destino/destino.component';
import { DestinoListarComponent } from './page/destino-listar/destino-listar.component';
import { PresupuestoComponent } from './page/presupuesto/presupuesto.component';
import { PresupuestoListarComponent } from './page/presupuesto-listar/presupuesto-listar.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { ViajeroComponent } from './page/viajero/viajero.component';
import { ViajeroListarComponent } from './page/viajero-listar/viajero-listar.component';
import { ServicioComponent } from './page/servicio/servicio.component';
import { ServicioListarComponent } from './page/servicio-listar/servicio-listar.component';
import { DestinoCreaeditaComponent } from './page/destino-creaedita/destino-creaedita.component' 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { DestinoDialogoComponent } from './page/destino-dialogo/destino-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DestinoBuscarComponent } from './page/destino-buscar/destino-buscar.component';
import { ServicioBuscarComponent } from './page/servicio-buscar/servicio-buscar.component';
import { ServicioCreaeditaComponent } from './page/servicio-creaedita/servicio-creaedita.component';
import { ServicioDialogoComponent } from './page/servicio-dialogo/servicio-dialogo.component';
import { GrupoComponent } from './page/grupo/grupo.component';
import { GrupoListarComponent } from './page/grupo-listar/grupo-listar.component';
import { GrupoCreaeditaComponent } from './page/grupo-creaedita/grupo-creaedita.component';
import { GrupoDialogoComponent } from './page/grupo-dialogo/grupo-dialogo.component';
import { GrupoBuscarComponent } from './page/grupo-buscar/grupo-buscar.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    DestinoComponent,
    DestinoListarComponent,
    PresupuestoComponent,
    PresupuestoListarComponent,
    ViajeroComponent,
    ViajeroListarComponent,
    ServicioComponent,
    ServicioListarComponent,
    DestinoCreaeditaComponent,
    DestinoDialogoComponent,
    DestinoBuscarComponent,
    ServicioBuscarComponent,
    ServicioCreaeditaComponent,
    ServicioDialogoComponent,
    GrupoComponent,
    GrupoListarComponent,
    GrupoCreaeditaComponent,
    GrupoDialogoComponent,
    GrupoBuscarComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule
    
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
