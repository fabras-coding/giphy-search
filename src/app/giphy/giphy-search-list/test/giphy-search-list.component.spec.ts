import { Component, DebugElement } from "@angular/core";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ShareModuleModule } from "../../../share/share.module";
import { GiphySearchListComponent } from "../giphy-search-list.component";

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

    it('Deveria ter criado o component GiphySearchListComponent', ()=>{

        expect(giphyComponent).toBeTruthy();
        expect(giphyComponent).not.toBeNull();
    });

    it('Deveria ter 2 tag a na renderizacao do component GiphySearchListComponent', () =>{
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
        ];

        fixture.detectChanges();
        fixture.whenStable().then(() =>{
            const debugElement : DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
            expect(debugElement.length).toBe(2);
        
        });

        
    });



})