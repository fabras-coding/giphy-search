import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { GiphySearchManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';


@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GiphySearchManualComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
