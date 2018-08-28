import { NgModule } from "@angular/core";
import { RouterModule} from "@angular/router";

@NgModule({
imports:[ RouterModule.forRoot([
/**
 * Colocar rotas lazy
 * 
    {    
         path: 'change-detection',
         loadChildren: ''
    },*/

    {
        path: 'giphy',
        loadChildren: '../app/giphy/giphy-search-manual/giphy-search-manual.module#GiphySearchManualModule' 
    },
    {   
        path: 'giphy-search-auto',
        loadChildren: '../app/giphy/giphy-search-auto/giphy-search-auto.module#GiphySearchAutoModule' 
    },
    {
        path:'contato',
        loadChildren:'../app/contato/contato.module#ContatoModule'
    },
    {
        path: 'diretiva-common-module',
        loadChildren: '../app/diretiva-common-module/diretiva-common-module.module#DiretivaCommonModuleModule'
    }


])],
exports: [ RouterModule],
})
export class AppRoutingModule {

    
}

