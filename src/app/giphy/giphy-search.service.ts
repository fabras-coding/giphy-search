import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class GiphySearchService{

constructor(private http: Http){

}

    pesquisarGiphy(limit: string, term: string): Observable<Response>{

     const url=this.getUrl(limit,term);
    return this.http.get(url);

    }

    getUrl(limit: string, term: string) : string{
        return 'http://api.giphy.com/v1/gifs/search?q=' + term +'&api_key=szQ9tOQRpIZ3hp2gNLLnOZD9T0Bo3111&limit=' + limit;
    }

}