let menuIcon = document.getElementById("hamburger");
let nav  = document.getElementById("nav");
let list = document.getElementById("nav").getElementsByTagName("a");
const handleMenuClick = ()=>{
    console.log("clicked"); 
    nav.classList.toggle("navv")

    if(menuIcon.className == "fa fa-bars"){
        menuIcon.className = "fa fa-times"
    }
    else{
        menuIcon.className = "fa fa-bars"
    }
}
for (var i=0; i<list.length; i++) {
    list[i].addEventListener('click', doStuff);
}

function doStuff() {
    console.log("hi")
    nav.classList.toggle("navv")
    menuIcon.className = "fa fa-bars"
}

menuIcon.onclick= handleMenuClick