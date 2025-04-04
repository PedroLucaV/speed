const btn = document.getElementById("cont");
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

const draw = (x1, y1, x2, y2, x3, y3, profundidade) => {
      if (profundidade == 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
        ctx.closePath();
      } else {
        const midx1 = (x1 + x2) / 2;
        const midx2 = (x2 + x3) / 2;
        const midx3 = (x3 + x1) / 2;
        const midy1 = (y1 + y2) / 2;
        const midy2 = (y2 + y3) / 2;
        const midy3 = (y3 + y1) / 2;
        
        draw(x1, y1, midx1, midy1, midx3, midy3, profundidade - 1);
        draw(midx1, midy1, x2, y2, midx2, midy2, profundidade - 1);
        draw(midx3, midy3, midx2, midy2, x3, y3, profundidade - 1);
      }
    };

cont.addEventListener("click", () => {
    const qnt = document.getElementById("qnt").value;   
    draw(
      canvas.width / 2,
      50,
      50,
      canvas.height - 50,
      canvas.width - 50,
      canvas.height - 50,
      qnt,
      ctx
    );    
});