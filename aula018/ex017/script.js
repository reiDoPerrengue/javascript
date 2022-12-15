function verificar() {
    var tnum = window.document.getElementById('txtnum')
    var num = Number(tnum.value)
    var res = window.document.getElementById('res')
    if(num.length ==0) {
        window.alert(`[ERRO] - Digite um número válido!`)  
    } 
    else if(num == 1){
            res.innerHTML = (`o valor informado foi: ${num}`)
        }
    else if (num == 2){
    res.innerHTML = (`o valor informado foi: ${num}`)}
    else if (num == 3){
    res.innerHTML = (`o valor informado foi: ${num}`)}
}