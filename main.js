function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    circle(40, 40, 60);
    fill(103,4,130);
    rect(40, 90, 5, 300);
    circle(40, 440, 60);
    fill(13,4,130);
    rect(90, 440, 455, 5);
    circle(600, 440, 60);
    fill(23,178,120);
    rect(600, 90, 5, 300);
    circle(600, 40, 60);
    fill(203,9,10);
    rect(90, 40, 455, 5);
    noStroke();
}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}