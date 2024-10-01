var btn=document.querySelector("#btn");
var content=document.querySelector("#content");
var voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang='en-IN'
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
let day=new Date()
let hours=day.getHours();
if(hours>=0&&hours<12){
    speak("Good Morning sir")
}
else if(hours>=12&&hours<4){
    speak("Good arternoon sir")
}
else {
    speak("Good evening sir")
}
}
window.addEventListener('load',()=>{
  
    setTimeout(()=>{
        wishme()
    },3000)
        
    
})


let speechrecognition=window.SpeechRecognition||window.webkitSpeechRecognition
let recognition=new speechrecognition()
recognition.onresult=(event=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    console.log(event)
    takeCommand(transcript.toLowerCase())
})
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
     voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
     voice.style.display="none"
if(message.includes("hello")||message.includes("hey")){
    speak("hello sir,what can i help you?")
}
else if(message.includes("what is your name")){
    speak("I am jenny ,your virtual assistant")
}

else if(message.includes("who are you")){
    speak("I am virtual assistant ,created by sameer and ayushman")
}

else if(message.includes("open youtube")){
    speak("opening youtube.......")
    window.open("https://youtube.com/","_blank")
}
 else if(message.includes("open google")){
    speak("opening google.......")
    window.open("https://google.com/","_blank")
}
else if(message.includes("open facebook")){
    speak("opening facebook.......")
    window.open("https://facebook.com/","_blank")
}
else if(message.includes("open instagram")){
    speak("opening instagram.......")
    window.open("https://instagram.com/","_blank")
}
else if(message.includes("open twitter")){
    speak("opening twitter.......")
    window.open("https://twitter.com/","_blank")
}
else if(message.includes("open linkedin")){
    speak("opening linkedin.......")
    window.open("https://linkedin.com/","_blank")
}
else if(message.includes("open github")){
    speak("opening github.......")
    window.open("https://github.com/","_blank")
}
else if(message.includes("open calculator")){
    speak("opening calculator.......")
    window.open("calculator://")
}
else if(message.includes("open whatsapp")){
    speak("opening whatsapp.......")
    window.open("whatsapp://")
}
else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}
else if(message.includes("date")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
}

else{
    let finalmsg="this is what i found on internet regarding"+"" +message.replace("jenny","")||message.replace("hey jenny","")||message.replace(" hello jenny","")
    speak(finalmsg)
    window.open(`https://www.google.com/search?q=${finalmsg}`,"_blank")
}
}