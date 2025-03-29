namespace escola{
    export class Aluno extends Pessoa{

        private _matricula: number;
        private _curso: string;
        private _escola: string;
        private _nota1: number;
        private _nota2: number;
        private _nota3: number;
        private _nota4: number;

        constructor (matricula:number){
            super();
            this._matricula = matricula;
            this._curso = "";
            this._escola = "";
            this._nota1 = 0;
            this._nota2 = 0;
            this._nota3 = 0;
            this._nota4 = 0;
        }

        get matricula(){
            return this._matricula;
        }


        get curso(){
            return this._curso;
        }
        set curso(curso: string){
            this._curso=curso;
        }

        get escola(){
            return this._escola;
        }
        set escola(escola: string){
            this._escola=escola;
        }

        get nota1(){
            return this._nota1;
        }
        set nota1(nota1: number){
            this._nota1=nota1;
        }

        get nota2(){
            return this._nota2;
        }
        set nota2(nota2: number){
            this._nota2=nota2;
        }

        get nota3(){
            return this._nota3;
        }
        set nota3(nota3: number){
            this._nota3=nota3;
        }

        get nota4(){
            return this._nota4;
        }
        set nota4(nota4: number){
            this._nota4=nota4;
        }


        public calcularMedia(){
            return (this._nota1 + this._nota2 + this._nota3 + this._nota4) / 4;
        }     
    }
}