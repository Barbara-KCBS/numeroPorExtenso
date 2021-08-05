const Enviar = () => {

    const input = document.querySelector("[data-input]");
    let valorDeEntrada = input.value;
    let resultado;
    const listaNumero = desmembraNumeros(valorDeEntrada);

    const unidadesLista = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const onzeADezenoveLista = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenasLista = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenasLista = ["cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seicentos", "setecentos", "oitocentos", "novecentos"];

    // desmembra números com mais de 1 algarismo e cria uma lista com unidades
    function desmembraNumeros(valor) {
        const desmembraNumero = valor.split('')
        const listaNumero = [];
        for (let i = 0; i < desmembraNumero.length; i++) {
            listaNumero.push(Number(desmembraNumero[i]));
        }
        return listaNumero;
    }

    function localizarNumeroPorExtenso(valorAlgarismo, indice, posicaoDoNumero, listaDeNumerosPorExtenso) {
        let contador = valorAlgarismo;

        for (let i = indice; i <= 9; i++) {
            if (posicaoDoNumero == contador) {
                let numeroPorExtenso = listaDeNumerosPorExtenso[i];
                return numeroPorExtenso
            }
            contador++;

        }
    }

    function valoresComUmAlgarismo() {

        let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[0], unidadesLista);
        return resultado = `${unidade}`;
    }

    function valoresComDoisAlgarismos(valor) {
        //números de 11 ao 19
        if (valor > 10 && valor < 20) {

            let onzeAoDezenove = localizarNumeroPorExtenso(1, 0, listaNumero[1], onzeADezenoveLista);
            return resultado = `${onzeAoDezenove}`;
        }
        //numero de 20 ao 99
        //dezenas
        if (listaNumero[1] == 0) {

            let dezenas = localizarNumeroPorExtenso(1, 0, listaNumero[0], dezenasLista);
            return resultado = `${dezenas}`;
        }
        if (listaNumero[0] > 1 && listaNumero[1] !== 0) {

            let dezena = localizarNumeroPorExtenso(2, 1, listaNumero[0], dezenasLista);

            let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[1], unidadesLista);

            return resultado = `${dezena} e ${unidade}`;
        }

    }

    function valoresComTresAlgarismos() {
        // 100 até 199
        if (listaNumero[0] == 1) {

            //centena
            if (listaNumero[1] == 0 && listaNumero[2] == 0) {
                resultado = centenasLista[0];
            }

            //centena + unidade
            if (listaNumero[1] == 0 && listaNumero[2] !== 0) {

                let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[2], unidadesLista);
                resultado = `cento e ${unidade}`;
            }
            //centena + dezena
            else {

                let dezena = localizarNumeroPorExtenso(1, 0, listaNumero[1], dezenasLista);
                resultado = `cento e ${dezena}`;
            }

            //111 ao 119
            if (listaNumero[1] == 1 && listaNumero[2] !== 0) {

                let onzeAoDezenove = localizarNumeroPorExtenso(1, 0, listaNumero[2], onzeADezenoveLista)

                resultado = `cento e ${onzeAoDezenove}`;
            }

        }
        // 200 até 999
        if (valorDeEntrada > 199) {

            //centenas
            if (listaNumero[1] == 0 && listaNumero[2] == 0) {

                let centenas = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenasLista);

                return resultado = `${centenas}`;
            }
            //centena + unidades
            if (listaNumero[1] == 0 && listaNumero[2] !== 0) {

                let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenasLista);
                let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[2], unidadesLista);

                resultado = `${centena} e ${unidade}`;

            }
            //centenas + dezenas
            else {

                let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenasLista);
                let dezena = localizarNumeroPorExtenso(1, 0, listaNumero[1], dezenasLista);

                resultado = `${centena} e ${dezena}`;

            }

            // centena + dezena + unidade
            if (listaNumero[1] == 1 && listaNumero[2] !== 0) {

                let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenasLista);
                let numerosDeOnzeAoDezenove = localizarNumeroPorExtenso(1, 0, listaNumero[2], onzeADezenoveLista);

                resultado = `${centena} e ${numerosDeOnzeAoDezenove}`;
            }

            if (listaNumero[0] > 1 && listaNumero[1] > 1 && listaNumero[2] > 0) {

                let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenasLista);
                let dezena = localizarNumeroPorExtenso(2, 1, listaNumero[1], dezenasLista);
                let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[2], unidadesLista);

                resultado = `${centena} e ${dezena} e ${unidade}`;
            }
        }

    }

    // 1 algarismo
    if (valorDeEntrada.length == 1) {
        valoresComUmAlgarismo();
    }

    //2 algarismos
    if (valorDeEntrada.length == 2) {
        valoresComDoisAlgarismos(valorDeEntrada)
    }
    //3 algarismos

    if (valorDeEntrada.length == 3) {
        valoresComTresAlgarismos();
    }


    const paragrafo = document.querySelector('[data-paragrafo]');
    paragrafo.innerHTML = resultado;
    input.value = '';
}

const botao = document.querySelector("[data-botao]");
botao.addEventListener('click', Enviar);




