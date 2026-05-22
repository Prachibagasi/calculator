const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    try{

        const expression = display.value;

        const result = eval(expression);

        const history = document.getElementById("history");

        history.innerHTML += `
            <div>${expression} = ${result}</div>
        `;

        history.scrollTop = history.scrollHeight;

        display.value = result;
    }

    catch{
        display.value = "Error";
    }
}


document.addEventListener("keydown", function(event){

    const key = event.key;

    if(!isNaN(key) || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)){
        appendValue(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        deleteLast();
    }

    else if(key === "Escape"){
        clearDisplay();
    }
});


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = document.querySelector(".theme-icon");

    if(document.body.classList.contains("light-mode")){
        icon.textContent = "☀️";
    }
    else{
        icon.textContent = "🌙";
    }
});