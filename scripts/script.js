// let openModal = document.querySelector('.open-modal');
// openModal.addEventListener('click', ()=>{
//     alert();
// })
let submit = document.querySelector('input[type=submit]');

submit.addEventListener('click', ()=>{
    submit.classList.add('click')
    setTimeout(()=>{
        submit.classList.remove('click');
    }, 500)
})