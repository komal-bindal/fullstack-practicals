let incrementer = document.getElementById("incrementer")
let decrementer = document.getElementById("decrementer")
let value = document.getElementById("value")

incrementer.onclick = ()=>{
    value.textContent = parseInt(value.textContent)+1;
    if(decrementer.disabled == true){
        decrementer.disabled = false;
    }
}
decrementer.onclick = () =>{
    value.textContent = parseInt(value.textContent)-1;
    if(value.textContent == parseInt(0)){
        decrementer.disabled = true;
    }
}
