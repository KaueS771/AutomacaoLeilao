const lanceMinimo = 100.00;
let valorAtual = lanceMinimo;

const lanceInput = document.getElementById('lanceInput');
const submitButton = document.getElementById('submitLance');
const messageDiv = document.getElementById('message');
const valorAtualSpan = document.getElementById('valorAtual');

function verificarLance() {
    const valorLance = parseFloat(lanceInput.value);

    messageDiv.textContent = '';
    messageDiv.classList.remove('success', 'error');

    if (isNaN(valorLance)) {
        messageDiv.textContent = 'Por favor, insira um valor numérico válido.';
        messageDiv.classList.add('error');
    } else if (valorLance <= lanceMinimo) {
        messageDiv.textContent = 'Erro: O lance deve ser maior ou igual a R$ 100.00';
        messageDiv.classList.add('error');
    } else if (valorLance <= valorAtual) {
        messageDiv.textContent = `Erro: O lance deve ser maior que o valor atual de R$ ${valorAtual.toFixed(2)}.`;
        messageDiv.classList.add('error');
    } else {
        valorAtual = valorLance; 
        valorAtualSpan.textContent = valorAtual.toFixed(2); 
        messageDiv.textContent = `Sucesso! Seu lance de R$ ${valorLance.toFixed(2)} foi aceito.`;
        messageDiv.classList.add('success');
    }
}

submitButton.addEventListener('click', verificarLance);
