const nome = "KELVIN";
    console.log(nome.charAt(4)); // Pega letra que está no indice ().
    console.log(nome.charAt(7)); // Se não tiver indice na variavel, retornará em branco

    console.log(nome.substring(1)); // Retira a letra que está no indice ().

// Exemplos de concatenação em Javascript
    console.log("Nome: ".concat(nome));
    console.log("Nome:", nome);
    console.log("Nome: " + nome);

// Array em Javascript
    console.log("KELVIN,HENRIQUE,FERREIRA".split(','));