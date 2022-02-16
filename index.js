const playButton = document.getElementById("play-button")
const pauseButton = document.getElementById("pause-button")
const stopButton = document.getElementById("stop-button")
const textInput = document.getElementById("text")
const speedInput = document.getElementById("speed")


playButton.addEventListener("click",() => {
    playText(textInput.value);
})

pauseButton.addEventListener("click",msg)
stopButton.addEventListener("click",stop)

function playText(text){
    if (speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    
    const utterance =  new SpeechSynthesisUtterance(text)
    utterance.lang="hi-IN"
    utterance.rate = speedInput.value || 1
    speechSynthesis.speak(utterance)
}

function msg(){
    if (speechSynthesis.speaking) speechSynthesis.pause()
}
function stop(){
   speechSynthesis.resume()
   speechSynthesis.cancel()
}