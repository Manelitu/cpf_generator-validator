import './assets/css/style.css'
const cpf = require('./modules/newCPF');
const verify = require('./modules/verifyCPF');

const newCpf = new cpf.GenerateCpf();
const content = document.querySelector('.content');
const divCpf = document.querySelector('.cpf');
const animation = document.querySelector('.animate');

let valueDisplay = newCpf.generateNewCpf();

function createDisplay() {
    const display = document.createElement('input');
    display.setAttribute('type', 'text');
    display.classList.add('display');
    divCpf.appendChild(display);
    
}

function createGenerateButton() {
    const button = document.createElement('button');
    button.classList.add("button");
    button.classList.add("generate");
    button.innerHTML = "Generate";
    content.appendChild(button);
}

function createVerifyButton() {
    const button = document.createElement('button');
    button.classList.add("button");
    button.classList.add("verify");
    button.innerHTML = "Verify";
    content.appendChild(button);
}

function buttonClick() {
    const verified = document.querySelector('.verify');
    document.addEventListener('click', event => {
        const el = event.target;
        
        if (el.classList.contains('generate')) {
            verified.classList.remove('valid', 'invalid');
            verified.innerHTML = "Verify"
            setTimeout(() => {
                animation.classList.remove('animation-none');
                animation.classList.add('animation');
                screen.value = "";
                setTimeout(() => {
                    animation.classList.add('animation-none');
                    screen.value = newCpf.generateNewCpf();
                    valueDisplay = screen.value;
                    console.log(valueDisplay)  
                }, 1300);
            }, 100);
            
        }
        if (el.classList.contains('verify')) {
            
            const formatedCPF = verify.generalVerify.formatCpf(screen.value);
            if(verify.generalVerify.verifyDigits(formatedCPF.slice(0,9), formatedCPF.slice(0,10), formatedCPF)) {
                verified.classList.remove('invalid');
                verified.classList.add('valid');
                verified.innerHTML = 'VALID CPF ✅'
                console.log('Valido');
            }
            else {
                verified.classList.remove('valid');
                verified.classList.add('invalid');
                verified.innerHTML = 'INVALID CPF ❌'
                console.log('Invalido');
            }
        }
    });
}

function generalFunction() {
    createGenerateButton();
    createVerifyButton();
    buttonClick();
    createDisplay();

}
generalFunction();
const screen = document.querySelector('.display');