function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    
    this.saldoPoup = saldoPoup
}

const luca = new ClientePoupanca("Luca", "125.101.234-06", "luca@gmail.com", 10, 50)

console.log(luca)

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

luca.depositarPoup(50)

console.log(luca)