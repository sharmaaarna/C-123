noseX="";
noseY="";
defference="";
wristLeft="";
wristRight="";

function setup(){
    canva=createCanvas(500,500);
    camra=createCapture(VIDEO);
    canva.position(700,150);
    PoseNet=ml5.poseNet(camra,modelLoded);
    PoseNet.on('pose',gotPoses);
}

function draw(){
    background("white")
    document.getElementById("width").innerHTML=defference+"px";
    fill("yellow");
    stroke("yellow");
    text("Aarna",noseX,noseY);
    textSize(defference);
}

function preload(){

}

function modelLoded(){
    console.log("modelInitialize")
}

function gotPoses(result){
    if (result.length > 0){
    console.log(result);
    noseX=result[0].pose.nose.x;
    noseY=result[0].pose.nose.y;
    wristRight=result[0].pose.rightWrist.x;
    wristLeft=result[0].pose.leftWrist.x;
    defference=Math.floor(wristLeft-wristRight);
}
    else{
        console.log("code has error")
    }
}