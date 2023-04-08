function myAge(age){
    return age*365
}
let myName=myAge(20);
console.log( "MyAgeDays: ",myName)



 
sum=0
for(i=0 ; i<10; i+=2){
    sum=sum+i
    console.log(i);
}
console.log("Sum: ", sum)




mul=1
for(i=1; i<17 ; i+=2){
    mul=mul*i
    console.log(i)
}
console.log("Multiply: ", mul)




mul=10
for(i=10; i>=10 && i<=18 ; i++){
    mul=mul*i
    console.log(i)
}
console.log("Multiply: ", mul)




sum=17
for(i=17; i>=17 && i<=30 ; i++){
    if(i==19 || i==20) continue;
    sum=sum+i
    console.log(i)
}
console.log("Sum: ", sum)