// Function utilizando o 'map' e o 'this'

 const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const numes = [1, 2];

console.log(mapComThis(nums, maca));

console.log(mapComThis(nums, laranja)); 



//Function utilizando o 'map'


 function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums)); 


//Function utilizando o 'filter'

 function retornaPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 43, 22, 45, 60, 492, 4, 25];

console.log(retornaPares(meuArray)); 



//Function utilizando o 'reduce' sem valor inicial

 function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    })
}

const arr =[1, 2];

console.log(somaNumeros(arr)); 

//Function utilizando o 'reduce' com valor inicial

const lista = [
    {
        name: 'sabao em po',
        preco: 9,
    },
    {
        name: 'cereal',
        preco: 15,
    },
    {
        name: 'toalha' ,
        preco: 30,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodade ', index + 1)
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));