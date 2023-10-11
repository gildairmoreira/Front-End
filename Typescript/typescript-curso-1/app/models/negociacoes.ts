import { Negociacao } from "./negociacao.js";



export class Negociacoes {
    private negociacoes: Negociacao[] = []  // NãoSimplificado Array<Negociacao>

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]  // NãoSimplificado ReadonlyArray<Negociacao>
    {
        return this.negociacoes;
    }
}