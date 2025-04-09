const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 800;
const context = canvas.getContext('2d');

const draw = (x1, y1, x2, y2, x3, y3, prof) => {
  if(prof == 0){
    context.beginPath();
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.lineTo(x3, y3)
    context.fill()
    context.closePath()
  }else{
    //define ponto medio de cada triangulo baseado no encontro
    prof--
    const medioX1 = (x1 + x2) / 2
    const medioX2 = (x2 + x3) / 2
    const medioX3 = (x1 + x3) / 2
    const medioY1 = (y1 + y2) / 2
    const medioY2 = (y2 + y3) / 2
    const medioY3 = (y1 + y3) / 2

    //Desenha triangulos em pontos medios do encontro
    draw(x1, y1, medioX1, medioY1, medioX3, medioY3, prof)
    draw(medioX1, medioY1, x2, y2, medioX2, medioY2, prof)
    draw(medioX2, medioY2, medioX3, medioY3, x3, y3, prof)
  }
}

document.getElementById('contador').addEventListener('click', () => {
  const prof = document.getElementById('quantidade').value
  context.clearRect(0, 0, 800, 800);
  draw(canvas.width/2, 50, 50, canvas.height-50,canvas.width-50,canvas.height-50, prof)
})