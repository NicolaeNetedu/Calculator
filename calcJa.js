let symbols = document.querySelectorAll('.symbols')
console.log(symbols)

let x = [symbols]
console.log(x)

const screenCalculator = document.querySelector('#screenCalc')
let butoane = document.querySelectorAll('.butoane')




function allCalcFunct(a,operator,b){
    if (operator === '+'){
        return a+b
    }
    if (operator === '-'){
        return  a-b
    }

    if (operator === '/'){
        return a/b
    }
    if (operator === '*'){
        return a*b
    }
}





butoane.forEach((button)=> {
    button.addEventListener('click', () => {
        screenCalculator.append(button.value)


    })
})





