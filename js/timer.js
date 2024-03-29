import sounds from "./sounds.js"
import Sound from "./sounds.js"
export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}){
    const sound = sounds()
    let timerTimeout
    let minutes = Number(minutesDisplay.textContent)
    let originalMinutes = minutes

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    }

    function countdown() {
        timerTimeout = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateDisplay(originalMinutes, 0)

            if(minutes <= 0 && seconds <= 0){
                resetControls()
                updateDisplay(originalMinutes, 0)
                sound.timeEnd()
                return
            }
            if(seconds <= 0){
                seconds = 60
                --minutes
            }
            updateDisplay(minutes, String(seconds -1))

            countdown()

        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeout)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}