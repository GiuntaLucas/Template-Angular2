import {Injectable, Inject} from '@angular/core';
import { TRANSLATION } from './translation';

@Injectable()
export class TranslateService{
    
    private _currentLang : string;

    constructor(@Inject(TRANSLATION) private translation: any){
        
    } 

    public use(lang: string):void{
        this._currentLang = lang;
    }

    private translate(key:string):string{
        let trans = key;
        if(this.translation[this.currentLang] && this.translation[this.currentLang][key]){
            return this.translation[this.currentLang][key];
        }

        return trans;
    }
    public instant(key:string){
        return this.translate(key);
    }
    public get currentLang() : string {
        return this._currentLang;
    }
    public set currentLang(v : string) {
        this._currentLang = v;
    }
    
}