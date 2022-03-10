const Modal = document.querySelector('.js__modal');
const closeModal = document.querySelector('.js__modal-back');
const registerOpen = document.querySelector('.js__register-form')
const authForm = document.querySelector('.js__auth-form');


// Register Form
function showAuthentication(){
    Modal.classList.add('modal__open')
}

function closeAuthentication(){
    Modal.classList.remove('modal__open')
}

Modal.addEventListener('click', closeAuthentication);

authForm.addEventListener('click', function(event){
    event.stopPropagation()
})

registerOpen.addEventListener('click', showAuthentication);
 
closeModal.addEventListener('click', closeAuthentication);