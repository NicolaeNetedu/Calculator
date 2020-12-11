function insert(num) {
 document.calculator.textviz.value = document.calculator.textviz.value + num
};

function egal() {
    let exp = document.calculator.textviz.value;
    if (exp) {
        document.calculator.textviz.value = eval(exp);
    }
};

function sterge() {

    document.calculator.textviz.value = "";

}


// let symbols = document.querySelectorAll('.symbols')
// const screenCalculator = document.querySelector('#screenCalc')
// let butoane = document.querySelectorAll('.butoane')
// let ravno = document.getElementById('ravno')
//
// let firstNumber = []
// let secondNumber = []
// console.log(firstNumber)
// console.log(secondNumber)
// console.log(symbols)
// let x = [symbols]
// console.log(x)
//
// butoane.forEach((button)=> {
//     button.addEventListener('click', () => {
//         screenCalculator.append(button.value)
//         firstNumber = Number(button.value)
//
//
//
//     })
// })
//
// symbols.forEach((el)=> {
//     el.addEventListener('click', () => {
//         screenCalculator.append(el.value)
//         if (el.value === '+'){
//             butoane.forEach((button)=> {
//                 button.addEventListener('click', () => {
//                     secondNumber=Number(button.value)
//
//
//
//
//                 })
//
//             })
//         }
//
//     })
// })
//
// ravno.addEventListener('click',()=>{
//     screenCalculator.append(ravno.value)
//    screenCalculator.append(secondNumber+firstNumber)
//
//
// })

// function allCalcFunct(a,operator,b){
//
//     if (operator === '+'){
//         return a+b
//     }
//     if (operator === '-'){
//         return  a-b
//     }
//
//     if (operator === '/'){
//         return a/b
//     }
//     if (operator === '*'){
//         return a*b
//     }
// }




