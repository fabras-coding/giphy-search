import { PageNotFoundComponent } from "./pagenotfound.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


const routes: Routes = [
    {path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);