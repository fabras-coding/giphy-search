import { Component, OnInit } from "@angular/core";
import { GiphySearchService } from "../giphy-search.service";
import {  Response } from "@angular/http";
import { Title } from "@angular/platform-browser";


@Component ({
    
    selector: 'giphy-search-manual',
    templateUrl: 'giphy-search-manual.component.html'

})

export class GiphySearchManualComponent implements OnInit{

    gifs: any[] = [];
    limit: string;
    term: string;

    constructor (private title:Title, private giphySearchService : GiphySearchService){

    }

    ngOnInit(){
        this.title.setTitle("Giphy Search Boladaum");
    }
 

    pesquisarGiphy(){
        this.giphySearchService.pesquisarGiphy(this.limit, this.term)
        .subscribe((response: Response) => {
            this.gifs = response.json().data;
        }); //o metodo subscribe provoca a execucao (assincrona por causa do rxjs) do metodo http  e quanto isso retornar, executa o codigo após => (arrowFunction é como se fosse function anonima od javascript)

        this.title.setTitle("Gifs Pesquisados");

    }

}