
//-Constantes e declarações ----------------------------------------------------------------------------------
const music = new Audio("./sounds/music.mp3")
music.loop = true

const buttonBg = document.querySelector(".forestBg")
const buttonForest = document.querySelector(".forestImg")
const buttonVolume = document.querySelector(".forestVolume")
const buttonPause = document.querySelector('.pause')

//-Botões de controle-----------------------------------------------------------------------------------------
buttonVolume.addEventListener("change", function(s) {
  alert("teste 2.2: range")
  musicPlay()
  changeVolume()
})

buttonBg.addEventListener("click", function() {
  alert("metade do volume")
  halfVolume()
})

buttonForest.addEventListener("click", function() {
  alert("max. volume")
  musicPlay()
  maxVolume()
})

buttonPause.addEventListener("click", function() {
  alert("pause")
  pauseSound()
})

//-Funções-----------------------------------------------------------------------------------------
function musicPlay() {
  music.play()
}

function pauseSound() {
  music.pause()
}

function changeVolume() {
  music.volume = forestVolume.value/100
}

function halfVolume() {
  music.play()
  music.volume = 0.5
}

function maxVolume() {
  music.volume = 1
}