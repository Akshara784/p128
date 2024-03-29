m1="music.mp3";
m2="music2.mp3";

leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet model is initialised");
}

function gotPoses(error,results){
    if(results.length>0){

    
    leftWristx= results[0].pose.leftWrist.x;
    leftWristy= results[0].pose.leftWrist.y;
    rightWristx= results[0].pose.rightWrist.x;
    rightWristy= results[0].pose.rightWrist.y;
}
  }

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    m1=loadSound("music.mp3");
    m2=loadSound("music2.mp3");
}