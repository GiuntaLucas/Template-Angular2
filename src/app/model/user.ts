export class User{

    
    private _name : string;
    
    private _firstname : string;
    
    private _email : string;
    
    private _password : string;

    constructor()
    {
        this.name = '';
        this.firstname = '';
        this.email = '';
        this.password = '';
    }
    public get password() : string {
        return this._password;
    }
    public set password(v : string) {
        this._password = v;
    }
    
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    public get firstname() : string {
        return this._firstname;
    }
    public set firstname(v : string) {
        this._firstname = v;
    }
    
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
}