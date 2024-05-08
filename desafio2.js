// Dados do Herói
let vitorias = 135;
let derrotas = 94;

// Contagem de vitórias
function subtrair(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldovitorias = subtrair(vitorias, derrotas);


//Cálculo de Elo
if (saldovitorias <= 10) {
	elo = "Ferro";
}

else if (11 <= saldovitorias && saldovitorias <= 20) {
	elo = "Bronze";
}

else if (21 <= saldovitorias && saldovitorias <= 50) {
	elo = "Prata";
}

else if (51 <= saldovitorias && saldovitorias <= 80) {
	elo = "Ouro";
}

else if (81 <= saldovitorias && saldovitorias <= 90) {
	elo = "Diamante";
}

else if (91 <= saldovitorias && saldovitorias <= 100) {
	elo = "Lendário";
}

else if (saldovitorias >= 101) {
	elo = "Imortal";
}




//saída
console.log("O herói tem saldo de " + saldovitorias + " e está no nível de " + elo)