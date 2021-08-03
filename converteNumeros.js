const Enviar = () => {

    const input = document.querySelector("[data-input]");
    const valor = input.value;
    let resultado;

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

    //1 algarismo

    if (valor.length == 1) {
        contador = 1;

        for (let i = 0; i < unidadeLista.length; i++) {
            if (valor == contador) {

                resultado = unidadeLista[i];
            }
            contador++;
        }
    }
    //2 algarimos

    if (valor.length == 2) {

        if (valor > 10 && valor < 20) {

            for (let i = 0; i < onzeADezenoveLista.length; i++) {
                if (valor == i + 11) {
                    resultado = onzeADezenoveLista[i];
                }

            }
        }

        if (listaNumero[1] == 0) {
            let contador = 10;

            for (let i = 0; i < dezenaLista.length; i++) {
                if (valor == contador) {
                    resultado = dezenaLista[i];
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
            resultado = `${dezena} e ${unidade}`;
        }

    }
    //3 algarismos

    if (valor.length == 3) {

        // 100 até 199
        if (listaNumero[0] == 1) {

            if (listaNumero[1] == 0 && listaNumero[2] == 0) {
                resultado = centenaLista[0];
            }

            if (listaNumero[1] !== 0 && listaNumero[2] == 0) {
                let dezena;
                let dezenaContador = 1;
                for (let i = 0; i < dezenaLista.length; i++) {
                    if (listaNumero[1] == dezenaContador) {
                        dezena = dezenaLista[i];
                        resultado = `cento e ${dezena}`;
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
                resultado = `cento e ${unidade}`;
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
                resultado = `cento e ${dezena}`;
            }

        }
        // 200 até 999
        //centenas
        if (valor > 199) {
            if (listaNumero[1] == 0 && listaNumero[2] == 0) {
                let contador = 200;

                for (let i = 1; i < centenaLista.length; i++) {
                    if (valor == contador) {
                        resultado = centenaLista[i];
                    }
                    contador += 100;
                }
            }
            //centena e unidades
            if (listaNumero[1] == 0) {
                let centena;
                let contadorCentena = 2;

                for (let i = 0; i < centenaLista.length; i++) {
                    if (listaNumero[0] == contadorCentena) {
                        let contador = i + 1;
                        centena = centenaLista[contador];
                    }
                    contadorCentena++;
                }

                let unidade;
                let contadorUnidade = 1;

                for (let i = 0; i < unidadeLista.length; i++) {
                    if (listaNumero[2] == contadorUnidade) {
                        unidade = unidadeLista[i]
                    }
                    contadorUnidade++;
                }
                resultado = `${centena} e ${unidade}`;

            }
            //centenas e dezenas
            if (listaNumero[1] > 1) {
                if (listaNumero[2] == 0) {

                    let centena;
                    let centenaContador = 2;

                    for (let i = 1; i < centenaLista.length; i++) {
                        if (listaNumero[0] == centenaContador) {
                            centena = centenaLista[i];
                            break;
                        }
                        centenaContador++;
                    }

                    let dezena;
                    let dezenaContador = 1;
                    for (let i = 0; i < dezenaLista.length; i++) {
                        if (listaNumero[1] == dezenaContador) {
                            dezena = dezenaLista[i];
                            break;
                        }
                        dezenaContador++;
                    }
                    resultado = `${centena} e ${dezena}`;
                }
            }


            // centena, dezena e unidade
            if (listaNumero[1] == 1) {
                let centena;
                let contadorCentena = 2;
                for (let i = 1; i < centenaLista.length; i++) {
                    if (listaNumero[0] == contadorCentena) {
                        centena = centenaLista[i]
                        break;
                    }
                    contadorCentena++;
                }
                let onzeAodezenove;
                let contadorOnzeAoDezenove = 1;
                for (let i = 0; i < onzeADezenoveLista.length; i++) {
                    if (listaNumero[2] == contadorOnzeAoDezenove) {
                        onzeAodezenove = onzeADezenoveLista[i]
                        break;
                    }
                    contadorOnzeAoDezenove++;
                }
                resultado = `${centena} e ${onzeAodezenove}`;
            }
            if (listaNumero[0] > 1 && listaNumero[1] > 1 && listaNumero[2] > 0) {
                let centena;
                let contadorCentena = 2;
                for (let i = 1; centenaLista.length; i++) {
                    if (listaNumero[0] == contadorCentena) {
                        centena = centenaLista[i];
                        break;
                    }
                    contadorCentena++;
                }
                let dezena;
                let contadorDezena = 2;
                for (let i = 1; dezenaLista.length; i++) {
                    if (listaNumero[1] == contadorDezena) {
                        dezena = dezenaLista[i];
                        break;
                    }
                    contadorDezena++;
                }
                let unidade;
                let contadorUnidade = 1;
                for (let i = 0; unidadeLista.length; i++) {
                    if (listaNumero[2] == contadorUnidade) {
                        unidade = unidadeLista[i];
                        break;
                    }
                    contadorUnidade++;
                }
                resultado =`${centena} e ${dezena} e ${unidade}`;
            }
        }
    }
    const paragrafo = document.querySelector('[data-paragrafo]');
    paragrafo.innerHTML = resultado;
    input.value = '';
}

const botao = document.querySelector("[data-botao]");
botao.addEventListener('click', Enviar);




