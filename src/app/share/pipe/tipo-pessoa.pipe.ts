import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tipoPessoa'
})

export class TipoPessoaPipe implements PipeTransform {

    transform(tipo: string) : string {

        if('F' === tipo ){
            return 'Pessoa fisica' ;
        }
        if('J' === tipo){
            return "Pessoa Juridica";
        }

        return '';
    }
}