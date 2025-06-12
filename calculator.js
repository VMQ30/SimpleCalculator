document.addEventListener(("DOMContentLoaded"), () =>{
    let numButtons = document.querySelectorAll(".num-button");
    let numDisplay = document.getElementById("number-text");
    
    clearNums();
    deleteNums();

    //displaying number based on button pressed
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

    //functions
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


});













