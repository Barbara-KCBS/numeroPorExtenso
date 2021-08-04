const Enviar = () => {

    const input = document.querySelector("[data-input]");
    const valorEntrada = input.value;
    let resultado;
    
    const unidadeLista = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const onzeADezenoveLista = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenaLista = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenaLista = ["cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seicentos", "setecentos", "oitocentos", "novecentos"];

    // desmembra números com mais de 1 algarismo e cria uma lista com unidades
    function desmembraNumeros(valor) {
        const desmembraNumero = valor.split('')
        const listaNumero = [];
        for (let i = 0; i < desmembraNumero.length; i++) {
            listaNumero.push(Number(desmembraNumero[i]));
        }
        return listaNumero;
    }
    const listaNumero = desmembraNumeros(valorEntrada);

    //1 algarismo
    //unidade
    function unidade(valor){
        contador = 1;

        for (let i = 0; i < unidadeLista.length; i++) {
            if (valor == contador) {

                return resultado = unidadeLista[i];
            }
            contador++;
        }
    }
      
    function dezena(valor){
        //números 11 ao 19
        if (valor > 10 && valor < 20) {

            for (let i = 0; i < onzeADezenoveLista.length; i++) {
                if (valor == i + 11) {
                    return resultado = onzeADezenoveLista[i];
                }
            }
        }
        //numero de 20 a 99
        //dezenas
        if (listaNumero[1] == 0) {
            let contador = 10;

            for (let i = 0; i < dezenaLista.length; i++) {
                if (valor == contador) {
                    return resultado = dezenaLista[i];
                }
                contador += 10;
            }
        //dezena + unidade
        } 
        if(listaNumero[0] > 1 && listaNumero[1] !== 0){
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
            return resultado = `${dezena} e ${unidade}`;
        }

    }
    if (valorEntrada.length == 1) {
        unidade(valorEntrada);
    }
    //2 algarimos

    if (valorEntrada.length == 2) {
        dezena(valorEntrada)
    }
    //3 algarismos

    if (valorEntrada.length == 3) {

        // 100 até 199
        if (listaNumero[0] == 1) {

            //100
            if (listaNumero[1] == 0 && listaNumero[2] == 0) {
                resultado = centenaLista[0];
            }
            //centena + unidade
            if (listaNumero[1] == 0 && listaNumero[2] !== 0) {
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
            //centena + dezena
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
            //111 ao 119
            if (listaNumero[1] == 1) {
                let onzeAoDezenove;
                let unidade = listaNumero[2];
                let unidadeContador = 1;

                for (let i = 0; i < onzeADezenoveLista.length; i++) {
                    if (unidade == unidadeContador) {
                        onzeAoDezenove = onzeADezenoveLista[i];
                        break;
                    }
                    unidadeContador++;
                }
                resultado = `cento e ${onzeAoDezenove}`;
            }
            
         

        }
        // 200 até 999
        if (valorEntrada > 199) {

            //centenas
            if (listaNumero[1] == 0 && listaNumero[2] == 0) {
                let contador = 200;

                for (let i = 1; i < centenaLista.length; i++) {
                    if (valorEntrada == contador) {
                        resultado = centenaLista[i];
                    }
                    contador += 100;
                }
            }
            //centena + unidades
            if (listaNumero[1] == 0 && listaNumero[2] !== 0) {
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
            //centenas + dezenas
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
            // centena + dezena + unidade
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
                //centena
                let centena;
                let contadorCentena = 2;

                for (let i = 1; centenaLista.length; i++) {
                    if (listaNumero[0] == contadorCentena) {
                        centena = centenaLista[i];
                        break;
                    }
                    contadorCentena++;
                }
                //dezena
                let dezena;
                let contadorDezena = 2;

                for (let i = 1; dezenaLista.length; i++) {
                    if (listaNumero[1] == contadorDezena) {
                        dezena = dezenaLista[i];
                        break;
                    }
                    contadorDezena++;
                }
                //unidade
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




