import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngswitch-exemplo',
    templateUrl: 'ngswitch-exemplo.component.html'
    
})

export class NgSwitchExemploComponent  {
    
    
tab: number =0;

setTab(num: number){
    this.tab=num;
}

isSelected(num: number){
    return this.tab ===num;
}

}