import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GiphySearchAutoComponent} from './giphy-search-auto.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: GiphySearchAutoComponent}
    ])]
})

export class GiphySearchAutoRoutingModule{

}