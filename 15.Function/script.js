//1
function getFirstValue(arr1){
    return arr1[0];
}
console.log("1:   ",getFirstValue([1,2,3]))
console.log("1:   ",getFirstValue([80,5,100]))
console.log("1:   ",getFirstValue([-500,0,50]))



//2
function getLastValue(arr1){
    return arr1[arr1.length-1];
}
console.log("2:   ",getLastValue([1,2,3]))
console.log("2:   ",getLastValue(["cat","dog","duck",]))
console.log("2:   ",getLastValue([true,false,true]))




//3







//4
function addition(num1,num2){
    let result=num1+num2;
    return result
}
console.log("4:   ",addition(2,3))
console.log("4:   ",addition(-3,-9))
console.log("4:   ",addition(7,3))




//5
function lessThan100(num1,num2){
    let result=num1+num2;
    if(result<100){
        console.log("5:   ",true)
    }else{
        console.log("5:   ",false)
    }
    return result   
}
lessThan100(22,15)
lessThan100(83,34)
lessThan100(3,77)




//6
function volumeOfBox(width,length,height){
    result=width*length*height
    return result;
}
console.log("6:   ",volumeOfBox(2,5,1))
console.log("6:   ",volumeOfBox(4,2,2))
console.log("6:   ",volumeOfBox(2,3,5))



//7
function points(twopointers,threepointers){
    result=(2*twopointers)+(3*threepointers)
    return result;
}
console.log("7:   ",points(1,1))
console.log("7:   ",points(7,5))
console.log("7:   ",points(38,8))




//8
const arr5 = [
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    }
]

function fillInfo(){
    for(let info of arr5){
        info.name="Nabir",
        info.surname="Nasibov",
        info.city="Samux"
    }
    return arr5;
   
}
console.log("8:   ",fillInfo())