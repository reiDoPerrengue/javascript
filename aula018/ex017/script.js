function verificar() {
    var tnum = window.document.getElementById('txtnum')
    var num = Number(tnum.value)
    var res = window.document.getElementById('res')
   // if(num.length ==0) {
    //    window.alert(`[ERRO] - Digite um número válido!`)  
   // } 
    //else {
    var fator = 1 
    var res = num * fator
    do {
        res.innerHTML(`${num} X ${fator} = ${res}`)
    
        fator++
        var res = num * fator
    } while (fator<=10)
    }
//}