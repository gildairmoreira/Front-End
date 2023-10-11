import { Negociacao } from "./negociacao.js";



export class Negociacoes {
    private negociacoes: Negociacao[] = []  // NãoSimplificado Array<Negociacao>

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[]  // NãoSimplificado ReadonlyArray<Negociacao>
    {
        return this.negociacoes;
    }
}