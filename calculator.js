document.addEventListener(("DOMContentLoaded"), () =>{
    let numButtons = document.querySelectorAll(".num-button");
    let numDisplay = document.getElementById("number-text");
    let numberEquation = document.getElementById("number-equation");
    let numEquation;
    
    let firstOpperand = 0;
    let secondOperand = 0;
    let opperator;
    let answer = 0;
    let opperatorPressed = false;
    let equalPressed = false;

    clearNums();
    deleteNums();
    numberButtonPress()
    operatorButtonPressed();
    equalButton();



    //functions

    function numberButtonPress(){
        numButtons.forEach((num) =>{
            
            num.addEventListener(("click"), () =>{

                if(equalPressed == true){
                    
                    numDisplay.textContent = 0;
                    firstOpperand = 0;
                    secondOperand = 0;
                    opperator = null;
                    opperatorPressed = false;
                    numberEquation.textContent = "";
                }

                equalPressed = false;
                
                if(numDisplay.textContent == 0){
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

        let decimal = document.getElementById("decimal");
        decimal.addEventListener("click", () =>{
            if(!(numDisplay.textContent.includes("."))){
                numDisplay.textContent += ".";
            }
        })
    }

    function equalButton(){
        let equals = document.getElementById("equals");
        equals.addEventListener(("click"), () =>{
            calculateEquation();

            if(equalPressed == false){
                numberEquation.textContent += ` ${secondOperand} = ${answer}`
                
            }
            opperatorPressed = false;
            equalPressed = true;
            
        })
    }

    function calculateEquation(){

        let num1 = parseFloat(firstOpperand);
        let num2 = parseFloat(secondOperand);

        switch(opperator){
            case("+"):
                answer = num1 + num2;
                break;
            case("-"):
                answer = num1 - num2;
                break;
            case("*"):
                answer = num1 * num2;
                break;
            case("/"):
                answer = num1 / num2;
                break;
            case("%"):
                answer = num1 % num2;
                break;     
            default:
                answer = "Error";               
        }

        answer = answer.toFixed(2).replace(/\.00$/, '');
        numDisplay.textContent = answer;
        
    }

    function clearNums(){
        let clearButton = document.getElementById('clear');
            clearButton.addEventListener(("click"), () =>{
            numDisplay.textContent = 0;
            firstOpperand = 0;
            secondOperand = 0;
            opperator = null;
            opperatorPressed = false;
            numberEquation.textContent = "";
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

                if(opperatorPressed == true){
                    secondOperand = numDisplay.textContent;
                    calculateEquation();
                    firstOpperand = answer;
                    
                }

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

                
                numberEquation.textContent = (`${firstOpperand} ${opperator}`);
                
                
                opperatorPressed = true;
                numDisplay.textContent = 0;
            });
        });
    }

});













