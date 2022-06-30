import Sounds from "./sounds.js"


export default function Timer 
({minutesDisplay,
  secondsDisplay,
  controlStop})

  {
  let timeTimerOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)


  function updateTimerDisplay (minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  
  function resetTime () {
    updateTimerDisplay (minutes, 0)
  }
  
  
  function resetZero () {
   updateTimerDisplay (0, 0)
   controlStop()
  }
  
  
  function stopTime () {
    clearTimeout (timeTimerOut)
  }
  
  


  function countDown () {
    timeTimerOut = setTimeout (function () {

      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
  
      updateTimerDisplay (minutes, 0)
  
     if (minutes <= 0 && seconds <= 0){
      resetTime ()
      controlStop()
      Sounds().timeEnd()
      return
     }
  
      if (seconds <= 0) {
       seconds = 60
       --minutes
      }
  
      updateTimerDisplay (minutes, String(seconds - 1))
      
  
      countDown ()

    }, 1000)
  }

  



  
  
  function plusMinutes() {
    minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)
    seconds = Number(secondsDisplay.textContent)
  
    updateTimerDisplay(minutes, seconds)
  }
  
  function lessMinutes() {
    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0)
    seconds = Number(secondsDisplay.textContent)
    if (minutes == 0) {
      seconds = 0;
    }
  
    updateTimerDisplay(minutes, seconds)
  }



  return {
    updateTimerDisplay,
    resetTime,
    resetZero,
    stopTime,
    countDown,
    plusMinutes,
    lessMinutes
  }

}
