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
    if(content=="take my selfie") {
        speak();
        console.log("take my selfie");
    }else{
        console.log("say take my selfie to take selfie");
    }
}

function speak() {
    var synth=window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds";
    var Utter=new SpeechSynthesisUtterance(speakdata);
    synth.speak(Utter);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

camera=document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});

function take_snapshot() {
    Webcam.snap(function(img_url){
        document.getElementById("result").innerHTML="<img id='capturedimage' src='"+img_url+"'>";
    });
}

function save() {
    link=document.getElementById("link");
    img=document.getElementById("capturedimage");
    link.href=img;
    link.click();
}

