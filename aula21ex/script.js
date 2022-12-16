function adicionar() {
    let fnum = window.document.getElementById('fnum')
    let list = window.document.getElementById('flista')
    let item = document.createElement('option')
    let num = Number(fnum.value)
    if (fnum.value.length == 0 || num <=0 || num >=101){
        window.alert('[ERRO] - Digite um valor numérico válido sem repeti-lo')
    }else{
        list.appendChild(item) 
        item.value = `list{num}` //options precisa conter value 
        item.text =` Valor ${num} adicionado com sucesso!`
    }
}