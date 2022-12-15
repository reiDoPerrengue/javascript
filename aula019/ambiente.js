let num =[5, 8, 2, 9, 3]

num[5] = 6
num.push(1)
num.sort()//coloca em numero crescente
console.log(num)
console.log(`O vetor contém ${num.length} posições`)

for(let pos in num ){
    console.log(`A posição ${pos} contem armazenado o valor ${num[pos]}`)
}

let to = num.indexOf(3)
console.log(`O valor está na posição ${to}`)
/*
for (let pos=0; pos<num.length ; pos++){
    console.log(`A posição ${pos} contem armazenado o valor ${num[pos]}`)
}
*/

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])
console.log(num[7])
*/