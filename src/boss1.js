let nomeUsuario = "Renanzinho"
let quantXP = 7520
const avisoDeNivel = "O Héroi de nome '" + nomeUsuario + "' está no nivel de "

if(quantXP <= 1000)
    {
        console.log(avisoDeNivel + "ferro.")
    }
    else if(quantXP >= 1001 && quantXP<=2000)
        {
            console.log(avisoDeNivel + "bronze.")
        }
        else if(quantXP >= 2001 && quantXP<=5000)
        {
            console.log(avisoDeNivel + "prata.")
        }
        else if(quantXP >= 5001 && quantXP<=7000)
        {
            console.log(avisoDeNivel + "ouro.")
        }
        else if(quantXP >= 7001 && quantXP<=8000)
        {
            console.log(avisoDeNivel + "platina.")
        }
        else if(quantXP >= 8001 && quantXP<=9000)
        {
            console.log(avisoDeNivel + "ascendente.")
        }
        else if(quantXP >= 9001 && quantXP<=10000)
        {
            console.log(avisoDeNivel + "imortal.")
        }
        else if(quantXP >= 1000)
        {
            console.log(avisoDeNivel + "Radiante.")
        }
        