import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchAutoComponent} from './giphy-search-auto.component';
import { GiphySearchAutoRoutingModule } from './giphy-search-auto-routing.module';


@NgModule({
  imports: [
    CommonModule, GiphySearchAutoRoutingModule
  ],
  exports: [],
  declarations: [GiphySearchAutoComponent],
  providers: [],
})
export class GiphySearchAutoModule { }
