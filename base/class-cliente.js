class Cliente {
    constructor(nome, emial, cpf, saldo) {
        this.nome = nome
        this.emial = emial
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor   
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const luca = new Cliente("Luca", "luca@gmail.com", "11111111", 10)

class ClientePoup extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoup) {
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}