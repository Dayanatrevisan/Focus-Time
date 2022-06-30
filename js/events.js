import {
  html,
  buttonPlay,
  buttonPlay2,
  buttonStop,
  buttonStop2,
  buttonPlus,
  buttonLess,
  buttonSoundTree,
  buttonSoundTree2,
  buttonSoundRain,
  buttonSoundRain2,
  buttonSoundCoffeShop,
  buttonSoundCoffeShop2,
  buttonSoundFire,
  buttonSoundFire2,
  buttonSun,
  buttonMoon,
  inputRangeTree2,
  inputRangeRain2,
  inputRangeCoffeShop2,
  inputRangeFire2
} from "./elements.js"


export default function Events ({controls, timer, sound}) {
 
  buttonPlay.addEventListener('click', function () {
    controls.play()
    sound.buttonPressAudio.play ()
    timer.stopTime ()
    timer.countDown ()
  }) 
  
  buttonPlay2.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
    timer.stopTime()
    timer.countDown ()
  }) 
  
  
  buttonStop.addEventListener('click', function () {
    controls.stopControls()
    timer.stopTime ()
    sound.buttonPressAudio.play ()
  }) 

  buttonStop2.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
  }) 
  

 //volume

 let buttonTree  = new Audio ("./sounds/Floresta.wav")
 let buttonRain = new Audio ("./sounds/Chuva.wav")
 let buttonCoffe  = new Audio ("./sounds/Cafeteria.wav")
 let buttonFire  = new Audio ("./sounds/Lareira.wav")
  buttonTree.loop = true
  buttonRain.loop = true
  buttonCoffe.loop = true
  buttonFire.loop = true



  function setVolumeTree(value) {
    buttonTree.volume = value
  }
 inputRangeTree2.addEventListener('mousemove', function () {
   setVolumeTree(inputRangeTree2.value)
  })

  function setVolumeRain(value) {
    buttonRain.volume = value
  }
 inputRangeRain2.addEventListener('mousemove', function () {
   setVolumeRain(inputRangeRain2.value)
  })

  function setVolumeCoffeShop(value) {
    buttonCoffe.volume = value
  }
 inputRangeCoffeShop2.addEventListener('mousemove', function () {
   setVolumeCoffeShop(inputRangeCoffeShop2.value)
  })

  function setVolumeFire(value) {
    buttonFire.volume = value
  }
 inputRangeFire2.addEventListener('mousemove', function () {
   setVolumeFire(inputRangeFire2.value)
  })

 //Events

  buttonSoundTree.addEventListener('click', function () {
    inputRangeTree2.value = 0.5
    if(buttonTree.paused){
      buttonTree.play()
      controls.colorButtonTree() 
    } 
  }) 

  buttonSoundTree2.addEventListener('click', function () {
   if (inputRangeTree2.value == 0) {
    buttonTree.pause()
     controls.colorButtonTree2()
   } else if (inputRangeTree2.value != 0) {
    buttonTree.play()
     controls.colorButtonTree()
    }
  }) 


  buttonSoundRain.addEventListener('click', function () {
    inputRangeRain2.value = 0.5
    if(buttonRain.paused){
      buttonRain.play()
      controls.colorButtonRain()
    } 
  }) 
  buttonSoundRain2.addEventListener('click', function () {
    if (inputRangeRain2.value == 0) {
      buttonRain.pause()
      controls.colorButtonRain2()
    } else if (inputRangeRain2.value != 0) {
      buttonRain.play()
      controls.colorButtonRain()
     }
  }) 




  buttonSoundCoffeShop.addEventListener('click', function () {
    inputRangeCoffeShop2.value = 0.5
    if(buttonCoffe.paused){
      buttonCoffe.play()
      controls.colorButtonCoffeShop()
    } 
  }) 
  buttonSoundCoffeShop2.addEventListener('click', function () {
    if (inputRangeCoffeShop2.value == 0) {
      buttonCoffe.pause()
      controls.colorButtonCoffeShop2()
    } else if (inputRangeCoffeShop2.value != 0) {
      buttonCoffe.play()
      controls.colorButtonCoffeShop()
     }



  }) 

  buttonSoundFire.addEventListener('click', function () {
    inputRangeFire2.value = 0.5
    if(buttonFire.paused){
      buttonFire.play()
      controls.colorButtonFire()
    } 
  }) 
  buttonSoundFire2.addEventListener('click', function () {
    if (inputRangeFire2.value == 0) {
      buttonFire.pause()
      controls.colorButtonFire2()
    } else if (inputRangeFire2.value != 0) {
      buttonFire.play()
      controls.colorButtonFire()
     }
  }) 
  







  buttonPlus.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
    timer.plusMinutes ()
  })
  

  buttonLess.addEventListener('click', function () {
    sound.buttonPressAudio.play ()
    timer.lessMinutes ()
  })

  buttonSun.addEventListener('click', function () {
    html.classList.toggle('active')
    sound.buttonPressAudio.play ()
    controls.darkMode()
  })
  buttonMoon.addEventListener('click', function () {
    html.classList.toggle('active')
    sound.buttonPressAudio.play ()
    controls.lightMode()
  })



}