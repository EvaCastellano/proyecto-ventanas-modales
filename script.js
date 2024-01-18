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