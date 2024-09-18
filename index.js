let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementsByClassName('passBox')[0]
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let number = document.getElementById('number')
let symbols = document.getElementById('symbols')
let genBtn = document.getElementById('genBtn')


// console.log(inputSlider,sliderValue,passBox,lowercase,uppercase,number,symbols,genBtn)

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', (e) => {
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
    console.log('hello')
    passBox.value = generatPass()
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Numbers = "0123456789";
let Saymbols = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"


function generatPass(){
    let genPassword = "";
    let allChars = "";
    // following line is about random alphabit charactor
 
    
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? Numbers : "";
    allChars += symbols.checked ? Saymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword
    }

    let i = 0;
    while(i <= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length))
        i++
    }


    return genPassword
}