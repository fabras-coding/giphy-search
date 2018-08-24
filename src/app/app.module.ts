import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { ContatoModule } from './contato/contato.module';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { InicioModule } from './inicio/inicio.module';




@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    
    InicioModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
