namespace escola{
    
    export abstract class Pessoa{
        private _nome:string;
        private _nascimento:number;
        private _cpf: string;
        private _endereco: string;
        private _telefone: string;

        get nome(){
            return this._nome;
        }
        set nome(nome: string){
            this._nome=nome;
        }

        get nascimento(){
            return this._nascimento;
        }
        set nascimento(nascimento: number){
            this._nascimento = nascimento;
        }

        get cpf(){
            return this._cpf;
        }
        set cpf(cpf:string){
            this._cpf = cpf;
        }

        get endereco(){
            return this._endereco;
        }
        set endereco(endereco:string){
            this._endereco = endereco;
        }

        get telefone(){
            return this._telefone;
        }
        set telefone(telefone:string){
            this._telefone = telefone;
        }

        public calcularIdade(anoAtual:number){
            return anoAtual - this._nascimento;
        }
    }
}