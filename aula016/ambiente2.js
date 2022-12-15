//Estrutura de repetição com teste lógico no fim

var vtab = 8 //valor da tabuada recebida
var fator = 1 
var res = vtab * fator
do {
    console.log(`${vtab} X ${fator} = ${res}`)
    
    fator++
    var res = vtab * fator
} while (fator<=10)

