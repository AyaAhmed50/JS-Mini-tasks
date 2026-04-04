var screen_eq = document.getElementById("result")
var operator;
var first_operand;
var second_operand;
var result = 0;
var buttons = document.querySelectorAll('.btn')
var special_btns = document.querySelectorAll('.special')
var operator_btns = document.querySelectorAll('.operator')
var numb_btns = document.querySelectorAll('.number')
var eq_btn = document.querySelector('.equals')




buttons.forEach((btn) => {
    btn.onclick = function(){
        btn.classList.toggle("click-Animation")
        //the toggle method act as switch if the name is found delete if not Add it to the class
    }
})

operator_btns.forEach((btn) =>{
    btn.onclick = function(){
        operator = btn.textContent
        screen_eq.innerText += (operator + " ")
    }
})

numb_btns.forEach((btn) =>{
    btn.onclick = function(){
        
        if(first_operand){
            console.log("working")
            second_operand = +(btn.textContent)
            screen_eq.innerText += second_operand
        }else{
            first_operand = +(btn.textContent)
            screen_eq.innerText = first_operand +" "
        }
    }
})

eq_btn.onclick = function(){
    switch(operator){
        case "+":
            result = Math.round(first_operand + second_operand)
            break
        case "-":
            result = Math.round(first_operand - second_operand)
            break
        case "*":
            result = Math.round(first_operand * second_operand)
            break
        case "/":
            result = Math.round(first_operand / second_operand)
            break
        case "%":
            result = Math.round(first_operand % second_operand)
            break
    }
    screen_eq.innerText = result
}