function tab(){
    document.getElementById("respostaTabu").innerHTML =""
    let num =  Number(document.getElementById("nun").value)
    for(let i = 1; i <=10; i++){
        let result = `${num}` * `${i}`
        document.getElementById("respostaTabu").innerHTML += `<p>${num} * ${i} = ${result}</p>`
    }
}


