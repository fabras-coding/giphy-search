import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngstyle-exemplo',
    templateUrl: 'ngstyle-exemplo.component.html',
    styleUrls: ['ngstyle-exemplo.component.css']
})

export class NgStyleExemploComponent  {
    
    
    cor: string = 'blue';
 

    borderStyle ='1px solid black';

    alertStyles = {
        'color': 'green',
        'font-weight': 'bold',
        'borderBottom': this.borderStyle
    };
    
  
}