import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngswitch-exemplo',
    templateUrl: 'ngswitch-exemplo.component.html'
    
})

export class NgSwitchExemploComponent  {
    
    
formatacao: number =0;

setFormatacao(num: number){
    this.formatacao=num;
}

isSelected(num: number){
    return this.formatacao ===num;
}

}