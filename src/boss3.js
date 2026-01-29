class heroi
{
    constructor(nome, idade, tipo)
    {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        const frasePadrão = "O " + this.tipo + " " + this.nome + " atacou usando "
        
        if(this.tipo == "mago"){
            console.log(frasePadrão + "magia")
        }else if(this.tipo == "guerreiro")
            {
                console.log(frasePadrão + "espada")
            }
            else if(this.tipo == "monge")
            {
                console.log(frasePadrão + "artes maciais")
            }
            else if(this.tipo == "ninja")
            {
                console.log(frasePadrão + "shuriken")
            }
    }
}

let heroi1 = new heroi("Cleber", 21, "mago")
heroi1.atacar()
let heroi2 = new heroi("Maria", 25, "guerreiro")
heroi2.atacar()
let heroi3 = new heroi("Xin", 53, "monge")
heroi3.atacar()
let heroi4 = new heroi("Kagawa", 32, "ninja")
heroi4.atacar()