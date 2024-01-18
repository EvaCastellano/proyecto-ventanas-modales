// SELECCIÓN ELEMENTOS
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

//  FUNCIONES
const openModal = function () {  //mostrar ventana = quitar hidden
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {  //esconder ventana = añadir hidden
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

// asociar un listener a cada botón para abrir y cerrar el modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal) //abrir

btnCloseModal.addEventListener('click', closeModal) //cerrar
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {  //cerrar con la tecla ESC
  // console.log(e, e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})