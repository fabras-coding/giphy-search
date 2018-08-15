import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ShareModuleModule } from "../../../share/share.module";
import { GiphySearchListComponent } from "../giphy-search-list.component";
import { Component } from "@angular/core";

describe('', () => {

let fixture: ComponentFixture<GiphySearchListComponent>;
let giphyComponent : GiphySearchListComponent; 

    beforeEach(async(() => { // o modulo de teste deve conter as mesmas infos do modulo que se deseja testar, com exceção dos exports
        TestBed.configureTestingModule({
            imports: [ShareModuleModule],
            declarations: [ GiphySearchListComponent]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(GiphySearchListComponent);
            giphyComponent = fixture.componentInstance;
            fixture.detectChanges();

        });
    }));

    it('Deveria ter criado o component', ()=>{

        expect(giphyComponent).toBeTruthy();
        expect(giphyComponent).not.toBeNull();
    });

    it('', () =>{
        giphyComponent.gifsList = [{
            id : '1',
            url:'localhost',
            images: [{fixed_height: {url: 'localhost/01.gif'}} ]
        },
        {
            id : '2',
            url:'localhost:8080',
            images: [{fixed_height: {url: 'localhost/01.gif'}} ]
            }
        ]
    });



})