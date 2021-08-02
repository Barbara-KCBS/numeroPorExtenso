const Enviar = () => {

    const input = document.querySelector("[data-input]");
    const valor = input.value;

    const unidadeLista = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const onzeADezenoveLista = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenaLista = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenaLista = ["cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seicentos", "setecentos", "oitocentos", "novecentos"];
    const milhar = "mil";

    function criarListaComNumeros(valor) {
        var valorParaString = valor.toString();
        var listaString = valorParaString.split('');
        const listaNumero = [];

        for (let i = 0; i < listaString.length; i++) {
            listaNumero.push(Number(listaString[i]));
        }
        return listaNumero;
    }
    const listaNumero = criarListaComNumeros(valor);

    //unidade
    if (valor.length == 1) {
        contador = 1;

        for (let i = 0; i < unidadeLista.length; i++) {
            if (valor == contador) {
                
                return document.write(unidadeLista[i]);
            }
            contador++;
        }
    }
    //dezena
    if (valor.length == 2) {

        if (valor > 10 && valor < 20) {

            for (let i = 0; i < onzeADezenoveLista.length; i++) {
                if (valor == i + 11) {
                    return document.write(onzeADezenoveLista[i]);
                }

            }
        }

        if (listaNumero[1] == 0) {
            let contador = 10;

            for (let i = 0; i < dezenaLista.length; i++) {
                if (valor == contador) {
                    return document.write(dezenaLista[i]);
                }
                contador += 10;
            }
        } else {
            let dezena = listaNumero[0];
            let dezenaContador = 2;

            for (let i = 1; i < dezenaLista.length; i++) {
                if (dezena == dezenaContador) {
                    dezena = dezenaLista[i];
                    break;
                }
                dezenaContador++;
            }
            let unidade = listaNumero[1];
            let unidadeContador = 1;

            for (let i = 0; i < unidadeLista.length; i++) {
                if (unidade == unidadeContador) {
                    unidade = unidadeLista[i];
                    break;
                }
                unidadeContador++;
            }
            return document.write(`${dezena} e ${unidade}`);
        }

    }
    //centena
    if (valor.length == 3) {


        if (listaNumero[1] == 0 && listaNumero[2] == 0) {
            let contador = 100;
            for (let i = 0; i < centenaLista.length; i++) {
                if (valor == contador) {
                    return document.write(centenaLista[i])
                }
                contador += 100;
            }
        }
        // do 101 ao 119
        if (listaNumero[0] == 1) {

            if (listaNumero[1] !== 0 && listaNumero[2] == 0) {
                let dezena;
                let dezenaContador = 1;
                for (let i = 0; i < dezenaLista.length; i++) {
                    if (listaNumero[1] == dezenaContador) {
                        dezena = dezenaLista[i];
                        return document.write(`cento e ${dezena}`);
                    }
                    dezenaContador++;
                }

            }
            if (listaNumero[1] == 0) {
                let unidade = listaNumero[2];
                let unidadeContador = 1;

                for (let i = 0; i < unidadeLista.length; i++) {
                    if (unidade == unidadeContador) {
                        unidade = unidadeLista[i];
                        break;
                    }
                    unidadeContador++;
                }
                return document.write(`cento e ${unidade}`);
            }
            if (listaNumero[1] == 1) { 
                let dezena;
                let unidade = listaNumero[2];
                let unidadeContador = 1;

                for (let i = 0; i < onzeADezenoveLista.length; i++) {
                    if (unidade == unidadeContador) {
                        dezena = onzeADezenoveLista[i];
                        break;
                    }
                    unidadeContador++;
                }
                return document.write(`cento e ${dezena}`)
            }

        }
        // 
        if (listaNumero[2] == 0) {

            let centena;
            let centenaContador = 2;
            let dezena;
            let dezenaContador = 1;

            for (let i = 1; i < centenaLista.length; i++) {
                if (listaNumero[0] == centenaContador) {
                    centena = centenaLista[i];
                    break;
                }
                centenaContador++;
            }
            for (let i = 0; i < dezenaLista.length; i++) {
                if (listaNumero[1] == dezenaContador) {
                    dezena = dezenaLista[i];
                    break;
                }
                dezenaContador++;
            }
            return document.write(`${centena} e ${dezena}`);
        }

        let centena;
        let contadorCentena = 2;
        let unidade;
        let contadorUnidade = 1;

        for (let i = 0; i < centenaLista.length; i++) {
            if (listaNumero[0] == contadorCentena) {
                let contador = i + 1;
                centena = centenaLista[contador];
            }
            contadorCentena++;
        }
        for (let i = 0; i < unidadeLista.length; i++) {
            if (listaNumero[2] == contadorUnidade) {
                unidade = unidadeLista[i]
            }
            contadorUnidade++;
        }
        return document.write(`${centena} e ${unidade}`);
    }


}


const botao = document.querySelector("[data-botao]");
botao.addEventListener('click', Enviar);




