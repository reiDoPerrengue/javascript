function verificar() {
    let tnum = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')
    let vtab = Number(tnum.value)
    if (tnum.value.length ==0) {
        window.alert(`[ERRO] - Digite um número válido!`)  
    } else {
        let fator = 1
        tab.innerHTML = '' //reset no select
        while (fator <=10){
            let item = document.createElement('option')
            item.text =`${vtab} X ${fator} = ${vtab*fator}`
            item.value = `tab{fator}` //options precisa conter value
            tab.appendChild(item) 
            fator++            
        }
    }
}