function tab(){
    document.getElementById("respostaTabu").innerHTML =""
    let num =  Number(document.getElementById("nun").value)
    for(let i = 1; i <=10; i++){
        let result = `${num}` * `${i}`
        document.getElementById("respostaTabu").innerHTML += `<p>${num} * ${i} = ${result}</p>`
    }
}

    
let total = 0
function calculaProd(){
    document.getElementById("respostaProdutos").innerHTML = ""
    let vlrPrd = Number(document.getElementById("prod").value)
    
    total += vlrPrd
    
    document.getElementById("respostaProdutos").innerHTML = " Valor total:" + total
    }
saldo = 0
function calculaProd(){
    document.getElementById("respostaProdutos").innerHTML = ""
    // let sdd = Number(document.getElementById("sld").value)
    let valorOp = Number(document.getElementById("vlr").value)
    let operac = document.getElementById("op").value
        if (operac === "debito"){
            saldo -= valorOp
        }
        else{
            saldo += valorOp
        }
        
    document.getElementById("respostaBanco").innerHTML = " Valor total:" + saldo
}

function calcProgGeom() {
    let inicio = Number(document.getElementById("inicio").value);
    let passo = Number(document.getElementById("passo").value);
    let repeticoes = Number(document.getElementById("repeticoes").value);

    let result = inicio; // O primeiro termo é o valor inicial
    document.getElementById("progGeom").innerHTML = ""; // Limpa resultados anteriores

    for (let i = 0; i < repeticoes; i++) {
        document.getElementById("progGeom").innerHTML += `<p>${result}</p>`;
        result *= passo; // Calcula o próximo termo da PG
    }
}

function calcFibonacci() {
    let a = 0; // Primeiro termo
    let b = 1; // Segundo termo
    let result = ""; // String para armazenar os resultados

    for (let i = 0; i < 10; i++) {
        result += a + "<br>"; // Adiciona o termo atual ao resultado
        let next = a + b; // Calcula o próximo termo
        a = b; // Atualiza 'a' para o próximo termo
        b = next; // Atualiza 'b' para o próximo termo
    }

    // Exibe os resultados
    document.getElementById("fibonacciResult").innerHTML = result;
}

function calcFatorial() {
    let numero = Number(document.getElementById("numero").value);
    let fatorial = 1; // Inicializa o fatorial
    let operacao = ""; // String para mostrar a operação

    if (numero < 0) {
        document.getElementById("fatorialResult").innerHTML = "O fatorial não está definido para números negativos.";
        return;
    }

    for (let i = 1; i <= numero; i++) {
        fatorial *= i; // Calcula o fatorial
        operacao += i; // Adiciona o termo à operação

        if (i < numero) {
            operacao += " * "; // Adiciona o símbolo de multiplicação
        }
    }

    // Exibe o resultado
    document.getElementById("fatorialResult").innerHTML = `O fatorial de ${numero} é: ${operacao} = ${fatorial}.`;
}

function registrarAulas() {
    const quantidadeAulas = Number(document.getElementById("quantidadeAulas").value);
    const aulasInputDiv = document.getElementById("aulasInput");
    aulasInputDiv.innerHTML = ""; // Limpa entradas anteriores
    aulasInputDiv.style.display = "block"; // Mostra a seção de entradas

    for (let i = 0; i < quantidadeAulas; i++) {
        aulasInputDiv.innerHTML += `
            <label>Aula ${i + 1}:</label>
            <select id="presenca${i}">
                <option value="presente">Presente</option>
                <option value="ausente">Ausente</option>
            </select><br>
        `;
    }

    aulasInputDiv.innerHTML += `<button onclick="calcularFrequencia(${quantidadeAulas})">Calcular Frequência</button>`;
}

function calcularFrequencia(quantidadeAulas) {
    let totalPresencas = 0;

    for (let i = 0; i < quantidadeAulas; i++) {
        const presenca = document.getElementById(`presenca${i}`).value;
        if (presenca === "presente") {
            totalPresencas++;
        }
    }

    const frequencia = (totalPresencas / quantidadeAulas) * 100; // Calcula a frequência em porcentagem

    // Exibe o resultado
    let resultadoText = `Frequência: ${frequencia.toFixed(2)}% - `;
    if (frequencia > 75) {
        resultadoText += "Aluno Aprovado!";
    } else {
        resultadoText += "Aluno Reprovado!";
    }

    document.getElementById("resultado").innerHTML = resultadoText;
}

