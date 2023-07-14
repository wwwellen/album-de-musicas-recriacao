var visibilidade = true; // variável que vai manipular o botão para mostrar a playlist de cada botão

function mostrarPlaylist1() { // função para quando clicar no botão

    if (visibilidade) {// se a variável visibilidade for igual a true, então
        document.getElementById("playlist1").style.display = "none";// ocultamos a div
        visibilidade = false; // alteramos o valor da variável para falso
    } else { // ou/e se a variável estiver com o valor false..
        document.getElementById("playlist1").style.display = "block"; // exibimos a div
        visibilidade = true; // alterando o valor da variável para true
    }
}

var visibilidade2 = true;

function mostrarPlaylist2() {

    if (visibilidade2) {
        document.getElementById("playlist2").style.display = "none";
        document.getElementById("playlist2").style.display = "block";
    }
}

var visibilidade3 = true;

function mostrarPlaylist3() {

    if (visibilidade3) {
        document.getElementById("playlist3").style.display = "none";
    } else {
        document.getElementById("playlist3").style.display = "block";
    }
}