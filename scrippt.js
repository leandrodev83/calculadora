function inserirNumero(num) {
    let numero = document.querySelector("#painel").innerHTML;
    document.querySelector("#painel").innerHTML = numero + num;
}
function botaoApagarNumero() {
    document.querySelector("#painel").innerHTML = "";
}
function apagarUltimoNumero() {
    let back = document.querySelector("#painel").innerHTML;
    document.querySelector("#painel").innerHTML = back.substring(0 , back.length -1);
}
function resultado() {
    let calc = document.querySelector("#painel").innerHTML;
    if(calc) {
        document.querySelector("#painel").innerHTML = eval(calc);
    }
}




''
