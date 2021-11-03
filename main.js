var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        console.log("taking selfie");
        speak();

    }
}

function speak(){
    var synth = window.speechSynthesis;
    var speakData ="taking your selfie in 5 seconds";

    var utterThis= new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
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
    img_format:"jpeg",
    jpeg_quality:90,
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie_img"/>';
    });
}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_img").src;
    link.href=img;
    link.click();
}