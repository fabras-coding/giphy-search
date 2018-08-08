import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
  
})
export class GiphySearchListComponent implements OnInit {

  @Input() //usado para permitir a comunicacao de um componente com este componente
  gifsList: any[]=[];

  constructor() { }

  ngOnInit() {
  }

}
