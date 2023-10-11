export class Negociacao
{
    /* Não Simplificado

    private _data: Date;
    private _quantidade: number;
    private _valor: number;
    
    constructor(data:Date, quantidade:number, valor:number)
    {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
     }
    */

/* Deixando o atributo public mais somente leitura e não modificação
constructor(
        public readonly data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume(): number
    {
        return this.quantidade * this.valor;
    } */

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume(): number
    {
        return this.quantidade * this.valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }
}