import { NgModule } from "@angular/core";
import { ShareModuleModule } from "../share/share.module";
import { PipeComponent } from "./pipe.component";
import { GiphyPipeRoutingModule } from "./pipe-routing.module";
import { TipoPessoaPipe } from "../share/pipe/tipo-pessoa.pipe";
import { CapitalizePipe } from "../share/pipe/capitalize.pipe";


@NgModule({
    imports: [ShareModuleModule, GiphyPipeRoutingModule],
    exports: [PipeComponent],
    declarations: [PipeComponent, TipoPessoaPipe, CapitalizePipe]

})

export class PipeModule{
    
}