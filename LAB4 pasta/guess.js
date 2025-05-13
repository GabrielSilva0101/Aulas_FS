const numero = Math.floor(Math.random() * 100);
console.log("Número secreto:", numero);

function veri() {
    const chute = parseInt(document.getElementById("num").value);
    const resultado = document.getElementById("res");
    
    if (chute === numero){
        resultado.innerHTML = "Parabéns! Você acertou!";
        resultado.style.setProperty("background-color", "green");
    }
    else {
        resultado.innerHTML = chute > numero ? "Mais baixo!" : "Mais alto!";
        resultado.style.setProperty("background-color", "red");
    }
}


