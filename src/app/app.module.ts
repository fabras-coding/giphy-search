import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { InicioModule } from './inicio/inicio.module';
import { DiretivaCommonModuleModule } from './diretiva-common-module/diretiva-common-module.module';
import { PipeComponent } from './pipe/pipe.component';
import { PipeModule } from './pipe/pipe.module';




@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InicioModule,
    DiretivaCommonModuleModule,
    PipeModule,

    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
