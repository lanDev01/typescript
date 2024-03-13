enum Color {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Color {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

function chooseColor(color: Color): void {
  console.log(Color[color]);
}

chooseColor(Color.ROXO);
