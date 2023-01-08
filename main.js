canvas = document.getElementById("mycanvas");
function setup()
{
  canvas=createCanvas(650,400);
  canvas.center();

  video= createCapture(VIDEO);
  video.size(650,400);
  video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded()
{
  console.log('Model Loaded!');
  poseNet.on('pose,gotPoses')
}