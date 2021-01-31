var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition;

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(e){
    console.log(e);
    var content=e.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}

function speak() {
    var synth=window.speechSynthesis;
    var speakdata=document.getElementById("textbox").value;
    var Utter=new SpeechSynthesisUtterance(speakdata);
    synth.speak(Utter);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach(camera);

