/*Cards cursos Start - Lauchbase - Go Stack*/

const modalOverlayCursos = document.querySelector('.modal-overlay-cursos')
const modal = document.querySelector(".modal-curso")
const cardsCursos = document.querySelectorAll('.card-card');

for (let cardCard of cardsCursos){
  cardCard.addEventListener("click", function(){
    modalOverlayCursos.classList.add("active")
    const cursoId = cardCard.getAttribute("id")
    modalOverlayCursos.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`
  })
}

//////////////////
document.querySelector('.close-modal-curso').addEventListener("click", function(){
  modalOverlayCursos.classList.remove("active")
  modalOverlayCursos.querySelector("iframe").src = ""

  
})

document.querySelector(".maximize-modal").addEventListener("click", function () {
    modal.classList.toggle("maximize")
    modal.classList.remove("maximize")
  })