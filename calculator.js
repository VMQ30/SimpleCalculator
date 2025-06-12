document.addEventListener(("DOMContentLoaded"), () =>{
    let numButtons = document.querySelectorAll(".num-button");
    let numDisplay = document.getElementById("number-text");

    let firstOpperand = 0;
    let secondOperand = 0;
    let opperator;
    let answer = 0;
    let opperatorPressed = false;

    clearNums();
    deleteNums();
    
    numberButtonPress()
    operatorButtonPressed();

    //functions

    function numberButtonPress(){
        numButtons.forEach((num) =>{
            num.addEventListener(("click"), () =>{
                if(numDisplay.textContent.length == 1 && !Number.isInteger(Number(numDisplay.textContent))){
                    numDisplay.textContent = num.textContent;
                }
                else if(numDisplay.textContent == 0){
                    numDisplay.textContent = num.textContent;
                }
                else{
                    numDisplay.textContent += num.textContent;
                }

                if(opperatorPressed == false){
                        firstOpperand = numDisplay.textContent;
                        
                    }

                    if(opperatorPressed == true){
                        secondOperand = numDisplay.textContent;
                        
                    }
            });
        });
    }
    function clearNums(){
        let clearButton = document.getElementById('clear');
            clearButton.addEventListener(("click"), () =>{
            numDisplay.textContent = 0;
        });
    }

    function deleteNums(){
        let deleteButton = document.getElementById('delete');
        deleteButton.addEventListener(("click"), () =>{
            if(numDisplay.textContent.length == 1){
                numDisplay.textContent = 0;
            }
            else{
                numDisplay.textContent = (numDisplay.textContent).slice(0, -1);
            }
            
        });
    }

    function operatorButtonPressed(){
        
        let opperatorButton = document.querySelectorAll(".operator");
        opperatorButton.forEach((button) =>{

            button.addEventListener(("click"), () =>{
                console.log(opperatorPressed);
                
                

                switch(button.textContent){
                    case("+"):
                        opperator = "+";
                        break;
                    case("-"):
                        opperator = "-";
                        break;
                    case("*"):
                        opperator = "*";
                        break;
                    case("/"):
                        opperator = "/";
                        break;
                    case("%"):
                        opperator = "%";
                        break;                
                }
                opperatorPressed = true;
                numDisplay.textContent = button.textContent;

            });
        });
    }

});













