import{ Injectable } from '@angular/core';
import{ Http, Response} from '@angular/http';
import{ Observable } from 'rxjs';

const host = 'http://dbapi.io/db/coll';
const host2= 'https://jsonplaceholder.typicode.com/posts'

@Injectable()
export class ContatoComponentService {
    constructor(private http: Http)
    {
        
    }

    enviarContato(contatoForm: any) : Observable<Response>{
        let nomeCompleto = contatoForm.nomeCompleto;
        let email = contatoForm.contato.email;
        let mensagem = contatoForm.contato.mensagem;

        return this.http.post(host2, {email: email, nome: nomeCompleto, mensagem: mensagem});
    }


}