window.onload = function() {
    const form = document.getElementById('formCalculadora');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário e o recarregamento da página

        // Obtem os valores inseridos pelo usuário
        const valor1 = parseFloat(document.getElementById('numero1').value);
        const valor2 = parseFloat(document.getElementById('numero2').value);

        // Calcula a soma
        const resultadoSoma = valor1 + valor2;

        // Exibe o resultado dentro do div "resultado"
        document.getElementById('resultado').textContent = 'Resultado: ' + resultadoSoma;
    });
};
