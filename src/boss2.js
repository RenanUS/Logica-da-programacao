let vitorias
let derrotas

console.log("Seu rank atual é: " + getRankAtual(150,42))

function getRankAtual(vitorias, derrotas)
{
    saldoPartidas = vitorias - derrotas
    if (saldoPartidas < 10)
        {
            rankAtual = "Ferro"
        }
        else if (saldoPartidas > 10 && saldoPartidas<=20)
        {
            rankAtual = "Bronze"
        }
        else if (saldoPartidas > 20 && saldoPartidas<=50)
        {
            rankAtual = "Prata"
        }
        else if (saldoPartidas > 50 && saldoPartidas<=80)
        {
            rankAtual = "Ouro"
        }
        else if (saldoPartidas > 80 && saldoPartidas<=90)
        {
            rankAtual = "Diamante"
        }
        else if (saldoPartidas > 90 && saldoPartidas<=100)
        {
            rankAtual = "Lendário"
        }
        else if (saldoPartidas > 100)
        {
            rankAtual = "Imortal"
        }
    return rankAtual
}
