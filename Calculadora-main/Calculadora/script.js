function insert(num) {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num; // Adiciona o número
}

function clearResult() {
    document.getElementById('resultado').innerHTML = ""; // Limpa o display
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1); // Remove o último caractere
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado.replace(/x/g, '*')); // Avalia a expressão
        } catch (error) {
            document.getElementById('resultado').innerHTML = 'Error'; // Exibe erro se a avaliação falhar
        }
    }
}
