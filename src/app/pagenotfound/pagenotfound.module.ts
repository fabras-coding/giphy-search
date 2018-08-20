import { NgModule } from "@angular/core";
import { routing } from "./pagenotfound.routes";
import { PageNotFoundComponent } from "./pagenotfound.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, routing],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent]

})

export class PageNotFoundModule{

}