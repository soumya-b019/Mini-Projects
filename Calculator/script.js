
let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    outputScreen.value = "";
}

function Del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

// let string = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//         }
//         else if(e.target.innerHTML == "AC"){
//             string = "";
//         }
//         else if(e.target.innerHTML == 'C'){
//             string = string - e.target.innerHTML;
//         }
//         else{
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//         }
//         document.querySelector(".input").value = " " + string + " ";
//     })
// })
