console.log("hello world");

const num1= document.querySelector("#num1")
const num2= document.querySelector("#num2")
const add= document.querySelector("#add")
const substract= document.querySelector("#substract")
const multiply= document.querySelector("#multiply")
const divide= document.querySelector("#divide")
const head= document.querySelector("#head")
add.addEventListener("click",()=>{
    head.innerHTML =  parseInt(num1.value) + parseInt(num2.value)
    num1.value=""
    num2.value=""
})
substract.addEventListener("click",()=>{
    head.innerHTML= num1.value - num2.value
    num1.value=""
    num2.value=""
})
multiply.addEventListener("click",()=>{
    head.innerHTML= num1.value * num2.value
    num1.value=""
    num2.value=""
})
divide.addEventListener("click",()=>{
    head.innerHTML= num1.value / num2.value
    num1.value=""
    num2.value=""
})