import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchAutoComponent} from './giphy-search-auto.component';
import { GiphySearchAutoRoutingModule } from './giphy-search-auto-routing.module';
import { GiphySearchService } from '../giphy-search.service';
import { ShareModuleModule } from '../../share/share.module';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';


@NgModule({
  imports: [
    CommonModule, GiphySearchAutoRoutingModule, ShareModuleModule, GiphySearchListModule
  ],
  exports: [GiphySearchAutoComponent],
  declarations: [GiphySearchAutoComponent],
  providers: [GiphySearchService]
  
})
export class GiphySearchAutoModule { }
