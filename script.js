const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")
const numeroRandomico = Math.round(Math.random() * 10)
let numeroTentativas = 1

function handleTryClick(event) {
  event.preventDefault()

  const inputNumero = document.querySelector("#inputNumero")

  if(Number(inputNumero.value) == numeroRandomico) {
    tela1.classList.add("hide")
    tela2.classList.remove("hide")

    tela2.querySelector("h2").innerText = `Acertou em ${numeroTentativas} tentativas!`
  }

  inputNumero.value = ''
  numeroTentativas++
}

function handleResetClick() {
  tela1.classList.remove("hide")
  tela2.classList.add("hide")

  numeroTentativas = 1
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)