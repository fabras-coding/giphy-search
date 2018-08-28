import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngclass-exemplo',
    templateUrl: 'ngclass-exemplo.component.html',
    styleUrls: ['ngclass-exemplo.component.css']
})

export class NgClassExemploComponent implements OnInit {
    
    
    cor: string = 'brown';

    borderStyle ='1px solid black';

    alertStyles = {
        'color': 'yellow',
        'font-weight': 'bold',
        'borderBottom': this.borderStyle
    };
    
    ngOnInit() {
        
    }

    
    constructor(){}
}