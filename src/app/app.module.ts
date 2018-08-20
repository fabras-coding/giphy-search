import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { GiphySearchManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { AppRoutingModule } from './app-routing-module';
import { ContatoComponent } from './contato/contato.component';
import { ContatoModule } from './contato/contato.module';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { InicioModule } from './inicio/inicio.module';
import { GiphySearchAutoModule } from './giphy/giphy-search-auto/giphy-search-auto.module';




@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GiphySearchManualComponentModule,
    AppRoutingModule,
    ContatoModule,
    InicioModule,
    GiphySearchAutoModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
