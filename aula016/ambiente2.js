//Estrutura de repetição com teste lógico no fim

var c = 2
if (c == 1) {
do {
    console.log(`1 X ${c} = ${c}`)

    c++
} while (c<=10)
}
else if (c == 2) {
    var expo = 1
do {
    console.log(`2 X ${expo} = ${c}`)
    c = c+2
    expo++
} while(c<=20) }

else if(c==3) {
do {
    var expo = 1
    console.log(`3 X ${expo} = ${c}`)
    c = c+3
    expo++
} while(c<=30) }