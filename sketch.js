function setup() {
  createCanvas(720, 500);
}
function preload() {
  img = loadImage('trio.jpg');
  img1 = loadImage('dog11.jpg');
  img2 = loadImage('dog1111.png');
  img3 = loadImage('cccc.png');
  
}
function draw(){
  image(img, 0, 0);
  if(mouseX>=0 && mouseX<=360 && mouseY>=0 && mouseY<=500) {
   let a = random(0, 250);
   let b = random(0, 250);
   let c = random(0, 0.1);
   let d = random(0, 250);
   tint(b, d, a)
   image(img1, 0, 0);
   rotate(c) 
   tint(a, b, d); 
   image(img2, mouseX-70, mouseY-100);
  }
  if(mouseX>=361 && mouseX<=720 && mouseY>=0 && mouseY<=500) {
    let m = random(75, 125);
    let n = random(200, 300);
    triangle(mouseX-75, mouseY-100, mouseX, mouseY+50, mouseX+75, mouseY-100)
    triangle(mouseX-75, mouseY+100, mouseX, mouseY-50, mouseX+75, mouseY+100)
    ellipse(mouseX, mouseY, m, n);
    ellipse(mouseX, mouseY, n, m);
    image(img3, mouseX-65, mouseY-75)
    
  }
  else {
    noTint()
  }
}
