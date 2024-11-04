const esAlfanumerico = char => /[a-z0-9]/.test(char);

const esPalindromo = texto => {
  const chars = texto.toLowerCase().split('');
  return chars.filter(esAlfanumerico).join('') === 
         chars.filter(esAlfanumerico).reverse().join('');
};

const verificarPalindromo = () => {
  const texto = document.getElementById('textoInput').value.trim();
  const resultadoDiv = document.getElementById('resultado');
  
  if (!texto) {
    resultadoDiv.textContent = 'Por favor, ingresa un texto';
    resultadoDiv.className = 'resultado';
    return;
  }

  const esPal = esPalindromo(texto);
  resultadoDiv.textContent = esPal ? '¡Es un palíndromo!' : 'No es un palíndromo';
  resultadoDiv.className = `resultado ${esPal ? 'es-palindromo' : 'no-palindromo'}`;
};

document.getElementById('textoInput').addEventListener('input', verificarPalindromo);