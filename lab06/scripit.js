let canvas= document.getElementById('canvas');
let ctx= canvas.getContext('2d');

let bola = {
    x: 0,
    y: 100,
    raio: 20,
    img: new Image(),
    desenha: function(){
        this.img.src = 'pk.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y- this.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao() {
    ctx.clearRect(0, 0, 800, 800);
    bola.desenha();
    requestAnimationFrame(animacao);
}

animacao()
document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;


    if (x_mouse >= 0 && x_mouse <= canvas.width &&
        y_mouse >= 0 && y_mouse <= canvas.height){

    if (x_mouse < bola.raio) x_mouse = bola.raio;
    if (x_mouse > canvas.width - bola.raio) x_mouse = canvas.width - bola.raio;
    if (y_mouse < bola.raio) y_mouse = bola.raio;
    if (y_mouse > canvas.height - bola.raio) y_mouse=canvas.height- bola.raio;

    console.log(x_mouse,y_mouse)
    bola.x = x_mouse;
    bola.y = y_mouse;
}
});
