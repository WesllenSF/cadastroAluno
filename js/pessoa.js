"use strict";
var escola;
(function (escola) {
    class Pessoa {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get nascimento() {
            return this._nascimento;
        }
        set nascimento(nascimento) {
            this._nascimento = nascimento;
        }
        get cpf() {
            return this._cpf;
        }
        set cpf(cpf) {
            this._cpf = cpf;
        }
        get endereco() {
            return this._endereco;
        }
        set endereco(endereco) {
            this._endereco = endereco;
        }
        get telefone() {
            return this._telefone;
        }
        set telefone(telefone) {
            this._telefone = telefone;
        }
        calcularIdade(anoAtual) {
            return anoAtual - this._nascimento;
        }
    }
    escola.Pessoa = Pessoa;
})(escola || (escola = {}));
