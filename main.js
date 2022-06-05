function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(700,500);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#5196e3");
}

function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}