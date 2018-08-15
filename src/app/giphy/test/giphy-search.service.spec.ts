import { GiphySearchService } from "../giphy-search.service";

describe('giphy-search.service.spec.ts', () => {
    
    var httpMock = jasmine.createSpyObj('Http', ['get']);
    let service: GiphySearchService;
    
    //inicializacoes para todos os its que estiverem dentro do teste
    beforeEach(() =>{
        service = new GiphySearchService(httpMock);
    });

    it('pesquisarGiphy', () =>{
        service.pesquisarGiphy('10','happyness');

        expect(httpMock.get).toHaveBeenCalled();
        expect(httpMock.get).toHaveBeenCalledWith('http://api.giphy.com/v1/gifs/search?q=happyness&api_key=szQ9tOQRpIZ3hp2gNLLnOZD9T0Bo3111&limit=10');

    });

    it('getUrl', () =>{
        const url = service.getUrl('10', 'happyness');
        expect(url).toBe('http://api.giphy.com/v1/gifs/search?q=happyness&api_key=szQ9tOQRpIZ3hp2gNLLnOZD9T0Bo3111&limit=10')
    });

    // fit('2 Deveria ser 2', () => { //f na frente do it significa q so ira rodar este teste // x ira ignorar o teste
    //     //entrada
    //     let a = 0;

    //     //processamento
    //     a= 0+1;

    //     //saida 
    //     expect(a).toBe(2);
    // });
}); 