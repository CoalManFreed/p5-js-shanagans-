let img;
function preload() {
  img = loadImage('dog1.png');
  img1 = loadImage('dog11.jpg');
  img2 = loadImage('dog1111.png');
  img3 = loadImage('truck.png')
  img4 = loadImage('grass.png')

}
function setup() {
  createCanvas(1080, 720);
  
}
function draw() {
   if(mouseIsPressed==false) {

     image(img3, 360, 0);
     image(img4, 720, 0);
     noTint()
      
   }
   else {
     let a = random(0, 250);
     let b = random(0, 250);
     let c = random(0, 0.1);
     let d = random(0, 250);
     tint(b, d, a)

     rotate(c) 
     tint(a, b, d); 
     image(img2, mouseX-70, mouseY-100);
   }
}
