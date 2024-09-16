let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementsByClassName('passBox')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let number = document.getElementById('number')
let symbols = document.getElementById('symbols')

console.log(inputSlider,sliderValue,passBox,lowercase,uppercase,number,symbols)

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', (e) => {
    sliderValue.textContent = inputSlider.value;
})