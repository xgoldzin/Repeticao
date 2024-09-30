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