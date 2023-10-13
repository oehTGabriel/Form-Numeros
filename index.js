const num1 = document.getElementById('numeroA');
const num2 = document.getElementById('numeroB');
const form = document.getElementById('formulario');

function Verificar(){
    if (num1.value > num2.value){
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const paragrafo = document.getElementById('answer')
    if (Verificar()){
        paragrafo.innerHTML = `${num1.value} é maior do que ${num2.value}!`
        } else {
            paragrafo.innerHTML = `${num1.value} Não é maior do que ${num2.value}!`
        }

})