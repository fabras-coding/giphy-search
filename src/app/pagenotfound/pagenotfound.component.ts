import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'not-found',
    template: '<p>Página não encontrada</p> <img src="http://i.giphy.com/LHZyixOnHwDDy.gif" (click)="voltar()"> '
})

export class PageNotFoundComponent{

constructor (private location: Location){

}

ngOnInit() : void {
    console.log('url atual: ', document.location.href);
    console.log('location: ', location.href);
    
}

voltar() : void {
    this.location.back();
    
}

}