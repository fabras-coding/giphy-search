import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchAutoComponent} from './giphy-search-auto.component';
import { GiphySearchAutoRoutingModule } from './giphy-search-auto-routing.module';
import { GiphySearchService } from '../giphy-search.service';


@NgModule({
  imports: [
    CommonModule, GiphySearchAutoRoutingModule
  ],
  exports: [],
  declarations: [GiphySearchAutoComponent],
  providers: [GiphySearchService]
  
})
export class GiphySearchAutoModule { }
