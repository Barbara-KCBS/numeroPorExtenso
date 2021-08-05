const Enviar = () => {

    const input = document.querySelector("[data-input]");
    let valorDeEntrada = input.value;
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
    const listaNumero = desmembraNumeros(valorDeEntrada);
    
    function localizarNumeroPorExtenso(valorAlgarismo, indice, posicaoDoNumero, listaDeNumeroPorExtenso){
        let contador = valorAlgarismo;
        
        for (let i = indice; i <= 9; i++) {
            if (posicaoDoNumero == contador) {
                let numeroPorExtenso = listaDeNumeroPorExtenso[i];
                return numeroPorExtenso
            }
            contador++;
            
        }
    }

    //1 algarismo
    //unidade
    function valoresComUmAlgarismo(valor){
        contador = 1;

        for (let i = 0; i < unidadeLista.length; i++) {
            if (valor == contador) {

                return resultado = unidadeLista[i];
            }
            contador++;
        }
    }
      
    function valoresComDoisAlgarismos(valor){
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
    
    // 1 algarismo
    if (valorDeEntrada.length == 1) {
        valoresComUmAlgarismo(valorDeEntrada);
    }
    
    //2 algarismos
    if (valorDeEntrada.length == 2) {
        valoresComDoisAlgarismos(valorDeEntrada)
    }
    //3 algarismos

    if (valorDeEntrada.length == 3) {
        valoresComTresAlgarismos();
    }
    function valoresComTresAlgarismos(){
        // 100 até 199
        if (listaNumero[0] == 1) {

            //100
            if (listaNumero[1] == 0 && listaNumero[2] == 0) {
                resultado = centenaLista[0];
            }
            //centena + unidade
            if (listaNumero[1] == 0 && listaNumero[2] !== 0) {
                let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[2], unidadeLista);
                resultado = `cento e ${unidade}`;
            }
            //centena + dezena
            if (listaNumero[1] !== 0 && listaNumero[2] == 0) {

                let dezena = localizarNumeroPorExtenso(1, 0, listaNumero[1], dezenaLista);
                resultado = `cento e ${dezena}`;
            }
            //111 ao 119
            if (listaNumero[1] == 1 && listaNumero[2] !== 0) {

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
        if (valorDeEntrada > 199) {

            //centenas
            if (listaNumero[1] == 0 && listaNumero[2] == 0) {
                let contador = 200;

                for (let i = 1; i < centenaLista.length; i++) {
                    if (valorDeEntrada == contador) {
                        resultado = centenaLista[i];
                    }
                    contador += 100;
                }
            }
            //centena + unidades
            if (listaNumero[1] == 0 && listaNumero[2] !== 0) {
                let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenaLista);
                let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[2], unidadeLista);
              
                resultado = `${centena} e ${unidade}`;

            }
            //centenas + dezenas
            if (listaNumero[1] > 0) {
                if (listaNumero[2] == 0) {
                    let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenaLista);
                    let dezena = localizarNumeroPorExtenso(1, 0, listaNumero[1], dezenaLista);
                  
                    resultado = `${centena} e ${dezena}`;
                }
            }
            // centena + dezena + unidade
            if (listaNumero[1] == 1 && listaNumero[2] !== 0) {

                let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenaLista);
                let numerosDeOnzeAoDezenove = localizarNumeroPorExtenso(1, 0, listaNumero[2], onzeADezenoveLista);

                resultado = `${centena} e ${numerosDeOnzeAoDezenove}`;
            }
            if (listaNumero[0] > 1 && listaNumero[1] > 1 && listaNumero[2] > 0) {
                
                let centena = localizarNumeroPorExtenso(2, 1, listaNumero[0], centenaLista);
                let dezena = localizarNumeroPorExtenso(2, 1, listaNumero[1], dezenaLista);
                let unidade = localizarNumeroPorExtenso(1, 0, listaNumero[2], unidadeLista);
         
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




