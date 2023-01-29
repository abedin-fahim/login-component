const inputField = document.querySelector('.form-controller__password')
const toggleBtn = document.querySelector('.from-controller__toggle-icon')

let foo = true
toggleBtn.addEventListener('click', ()=> {
    if(foo){
        foo = false
        inputField.setAttribute('type', 'text')
    } else {
        foo = true
        inputField.setAttribute('type', 'password')
    }
})