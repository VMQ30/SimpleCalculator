document.addEventListener(("DOMContentLoaded"), () =>{
    let numButtons = document.querySelectorAll(".num-button");
    let numDisplay = document.getElementById("number-text");

    numButtons.forEach((num) =>{
        num.addEventListener(("click"), () =>{
            if(numDisplay.textContent == 0){
                numDisplay.textContent = num.textContent;
            }
            else{
                numDisplay.textContent += num.textContent;
            }
        });
    });
});








