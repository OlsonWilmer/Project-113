function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video(VIDEO, 60, 0, 640, 480);
    video.hide();
    
      
    tint_color = "";
}

function draw() {
    tint(tint_color);
    ellipse(56, 46, 55, 55);
    rect(83, 40, 460, 15);
    ellipse(571, 46, 55, 55);
    rect(562, 72, 20, 335);
    ellipse(571, 435, 55, 55);
    rect(47, 72, 20, 335);
    ellipse(57, 435, 55, 55);
    rect(83, 425, 460, 15);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

