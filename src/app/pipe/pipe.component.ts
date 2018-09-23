import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'giphy-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  dataCriacao: Date = new Date(1988,3,15);
  mensagem:string = "Teste de mensagem com pipe";

  constructor() { }

  ngOnInit() {
  }

}
