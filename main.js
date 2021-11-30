Webcam.set({
    height:300,
    width:350,
    image_format: 'png',
    png_quality : 90
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );

function takeSnapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("output").innerHTML='<img id="Output_Image" src="'+data_uri+'"/>';

    });

}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Jc9wx8eM8/model.json", modelLoaded);

function modelLoaded(){

    console.log("Model Loaded!");

}

function Check(){

    Img=document.getElementById("Output_Image");
    classifier.classify(Img, gotResult)

}

function gotResult(error, results){

    if(error){

        console.error(error);

    }
    else{

        console.log(results);
        document.getElementById("ObjectName").innerHTML=results[0].label;
        document.getElementById("AccuResult").innerHTML=results[0].confidence.toFixed(3);

    }

}