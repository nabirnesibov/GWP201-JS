
let startBtn = document.querySelector(".start");
let stopBtn=document.querySelector(".stop");
let number=document.querySelector(".content")
let byBtn1=document.querySelector(".increment")
let byBtn2=document.querySelector(".decrement")
let resetBtn=document.querySelector(".reset")
let bonus=document.querySelector(".bonusinput")
let resultBtn=document.querySelector(".endBtn")

let count=0;
let interval;
startBtn.addEventListener("click",function(){
        stopBtn.removeAttribute("disabled","")
        this.setAttribute("disabled",null);
        interval=setInterval(()=>{
            count++;
            number.innerText=count;
            
        },1000)
})
stopBtn.addEventListener("click",function(){
    startBtn.removeAttribute("disabled","")
    this.setAttribute("disabled","")
    clearInterval(interval);

})
resetBtn.addEventListener("click",function(){
    startBtn.removeAttribute("disabled","")
    stopBtn.removeAttribute("disabled","")
    count=0;
    number.innerText=count
    clearInterval(interval)
})
byBtn1.addEventListener("click",function(){
    number.innerText=++count;
})
byBtn2.addEventListener("click",function(){
    number.innerText=--count;
})
resultBtn.addEventListener("click",function(){
    let sum=count+bonus.innerText
    return number.innerText+=sum
})