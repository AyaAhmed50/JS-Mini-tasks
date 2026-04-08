var output = document.getElementById("calc")

function display(btn){
    output.value += btn
}
function Clear(){
    output.value = ""
}
function Delete(){
    output.value = output.value.slice(0,-1)
}

function calc(){

        output.value = eval(output.value)
}





