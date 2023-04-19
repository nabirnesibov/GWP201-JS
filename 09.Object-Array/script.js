///////////////////////////////////////////////////////////1
let names1 = ["Adam", "Sarah", "Malcolm"] 
let names2 = ["Harry", "Newt", "Luna", "Cho"] 
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] 

function secretName(arr){
    let firstLetters=arr.map(el=>el[0]).sort()
    let joinFirstLetters=firstLetters.join("")
    return joinFirstLetters
}
console.log(secretName(names1))
console.log(secretName(names2))
console.log(secretName(names3))



///////////////////////////////////////////////////////////2
const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]

///////2.1
let arr2=users.filter((el)=>{
    return (el.surname[0].toLowerCase()=='r') && (el.uni==='UNEC')
})
console.log(arr2);


/////// 2.2
let arr3=users.filter((el)=>{
    return (el.age==='22') && (el.name[0].toLocaleLowerCase()==='a')
})
console.log(arr3);


/////// 2.3
let arrr4=users.map((element)=>
element.gender==="male"
? {...element, name: `Mr ${element.name}`}
: {...element, name: `Ms ${element.name}`}
)
console.log(arrr4);



///////////////////////////////////////////////////3
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]


///////////////////////////////////////////////////4
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]


let priceDivide2=arr4.filter((el)=>{
    return (el.price/=2)
})
console.log(arr4)



//////////////////////////////////////5
let num1 = 246 
let num2 = 102 
let num3 = 152 
function reverseNum(numbers){
    numbers=numbers+""
    let joinNum=numbers.split("").reverse().join("")
    return numbers+joinNum
}
console.log(reverseNum(num1))
console.log(reverseNum(num2))
console.log(reverseNum(num3))