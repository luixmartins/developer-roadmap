function writeNumber(value) {
    const input = document.getElementById('input')
    
    if (value === ","){
        if (input.value.slice(-1) !== ","){ 
            input.value = input.value.replace(",", "")
            input.value += ","
        }
    } else { 
        input.value += value 
    }
}

function operation(operator){ 
    const input = document.getElementById('input')

    if (operator !== "=" && input.value != ""){
        const firstValue = parseFloat(input.value) 
        const operatorValue = operator 

        input.value = ""
    } else {
        if (input.value != ""){ 
            const secondValue = parseFloat(input.value)  
        }
    }

    if (operator === "="){ 
        switch (operatorValue){ 
            case "+": {
                result = firstValue + secondValue
            }
            case "-": {
                result = firstValue - secondValue 
            }
            case "*": {
                result = firstValue * secondValue 
            }
            case "/": {
                result = firstValue / secondValue 
            }
        }

        input.value = result 
    }

}