const a=10
const b=5
//const soma= a+b  //5+10=15
//const subtracao= a-b //5-10=-5
// const multiplicacao= a*b //5*10=50
// const divisao= b/a //10/5=2
const operacao= 'divisao'
const resultado=0

// if(operacao=== 'soma'){
//     resultado=a+b

// } else {
//     resultado=a/b
// }

if(operacao=== 'soma'){
    resultado=a+b

} else if(operacao=== 'divisao'){
    resultado=a/b
} else if(operacao=== 'subtracao'){
    resultado=a-b
} else if(operacao=== 'multiplicacao'){
    resultado=a*b
} else{
    console.log(operacao+' não é uma operação válida')
}

if(resultado){
    console.log(resultado)
}

//console.log(soma)
//console.log(subtracao)
//console.log(multiplicacao)
//console.log(divisao)



