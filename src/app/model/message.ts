export class Message{
    
    
    private _type : string;
    
    private _text : string;
    public get text() : string {
        return this._text;
    }
    public set text(v : string) {
        this._text = v;
    }
    
    public get type() : string {
        return this._type;
    }
    public set type(v : string) {
        this._type = v;
    }
    
    constructor(){
        this.type
    }
    
}