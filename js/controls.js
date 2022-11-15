export default function Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet
}){
    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')

        buttonStop.classList.remove('hide')
        buttonSet.classList.add('hide')
    }

    function pause(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }
    
    function getMinutes(){
        let newMinutes = prompt("Quantos minutos?")
            if(!newMinutes){
                return false
            }

        return newMinutes    
    }

    function reset() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')

        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
    }

    return{
        reset,
        play,
        pause,
        getMinutes
    }
}