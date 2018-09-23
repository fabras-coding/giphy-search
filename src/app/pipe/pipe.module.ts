import { NgModule } from "@angular/core";
import { ShareModuleModule } from "../share/share.module";
import { PipeComponent } from "./pipe.component";
import { GiphyPipeRoutingModule } from "./pipe-routing.module";


@NgModule({
    imports: [ShareModuleModule, GiphyPipeRoutingModule],
    exports: [PipeComponent],
    declarations: [PipeComponent]

})

export class PipeModule{
    
}