function setup() {
  canvas = createCanvas(300, 230);
  canvas.position(510, 370);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet', modelLoaded)
}

function draw(){
  image(video, 0,0,290,220);
  fill('lightseagreen')
  rect(0,0,300,20);
  rect(0,0,20, 230);
  rect(0,210,300,20);
  rect(280,0,20,230);
  classifier.classify(video, gotResults);
}
 function modelLoaded(){
   console.log("Model Loaded!")
 }

 function gotResults(error, results){
   if(error){
     console.error(error);
     alert('Sorry! There was a teensy weensy error! Our Ira Wheera Tech Team is getting to work on fixing it! Come back and retry in a minute! (Please reload, or this error will stay up forever, no matter how many times you click OK.')
   }
   else{
     document.getElementById("spanobject").innerHTML=results[0].label;
     document.getElementById("spanaccur").innerHTML=results[0].confidence.toFixed(3);
   }
 }