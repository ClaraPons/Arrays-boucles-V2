// 1 - Nombre pairs

// for(let i = 11; i <= 47; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 2 - Nombre impairs

// for(let i = 108; i < 588; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// 3 - Puissance et racine carrée
// const numbers = [1, 2, 3, 4, 5]
// const squares = []
// const roots = []

// for(let i = 0; i < numbers.length; i++){
//     squares[i] = numbers[i] ** 2
// }

// for (let i = 0; i < squares.length; i++){
//     roots[i] = Math.sqrt(squares[i])
// }

// console.log(squares)
// console.log(roots)

// 4 - Table de multiplication

// for (let i = 0; i <= 10 ; i++){
//     let multiplication = i * 3
//     console.log(`3 x ${i} = ${multiplication}`)
// }

// 5 - Plusieurs tables de multiplication

// for (let i = 0; i <= 10; i++){
//     for(let j = 0; j <= 10; j++){
//     let multiplication = j * i
//     console.log(`${i} x ${j} = ${multiplication}`)
//     }
//     console.log(`
//     `)
// }

// 6 - Factorielle v1

// let fact = 1

// for (let i = 1; i <= 7; i++){
//     fact = fact * i 
//     console.log(fact)
// }

// 7 - Factorielle v2

let fact = 2

for (let i = 2; i <= 8; i++){ 
    for (let j = 2; j <= i ; j++){
         fact = fact * j// i = 0    j = 0
        console.log(`!${j} = ${fact}`)
    }
}
