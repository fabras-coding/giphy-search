import { NgModule } from "@angular/core";
import { InicioComponent } from "./inicio.component";
import { RouterModule } from "@angular/router";

@NgModule({
imports :[
    RouterModule.forChild([
        { path: '', component: InicioComponent}
    ])
],
declarations: [InicioComponent]
})

export class InicioModule{
    
}