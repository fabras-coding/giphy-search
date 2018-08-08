import { NgModule } from '@angular/core';
import { GiphySearchListComponent } from './giphy-search-list.component';
import { ShareModuleModule } from '../../share/share.module';

@NgModule({
  imports: [
    ShareModuleModule
  ],
  exports: [GiphySearchListComponent],
  declarations: [ GiphySearchListComponent]
})
export class GiphySearchListModule { }
