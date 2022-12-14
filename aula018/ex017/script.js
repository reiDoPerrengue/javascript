function verificar() {
    var tnum = window.document.getElementById('txtnum')
    var num = Number(tnum.value)
    var res = window.document.getElementById('res')
    if(num.length ==0) {
        window.alert(`[ERRO] - Digite um número válido!`)  
    } 
    else if (num == 1) {
            for (var n1=0; n1<=10; n1++){
                res.innerHTML = `1 X ${n1} = ${n1}`}
        }
    }