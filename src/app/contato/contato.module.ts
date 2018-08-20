import { NgModule } from '@angular/core';
import { ShareModuleModule } from '../share/share.module';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponentService } from './contato.component.service';

@NgModule({
  imports: [
    ShareModuleModule, ContatoRoutingModule
  ],
  declarations: [ContatoComponent],
  providers: [ContatoComponentService]
})
export class ContatoModule { }
