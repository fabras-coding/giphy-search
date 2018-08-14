import { Component, OnInit, Input } from '@angular/core';
import { Giphy } from '../giphy-search-manual/giphy.type';

@Component({
  selector: 'giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
  
})
export class GiphySearchListComponent implements OnInit {

  @Input() //usado para permitir a comunicacao de um componente com este componente
  gifsList: Giphy[]=[];

  constructor() { }

  ngOnInit() {
  }

}
