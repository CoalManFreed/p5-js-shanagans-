function setup() {
  createCanvas(600, 600);
}
function draw() {
  var ape=(random(150,250));
  var cow=(random(150,250));
  background(100,100,100)
  fill(200,10,200)
  rect(200,200,200,200)
  if (mouseX>=200 && mouseX<=400 && mouseY>=200 && mouseY<=400) {
    fill(500,200,500)
    rect(ape,cow,ape,cow)
    fill(700,200,500)
    rect(cow,random(150,250),cow,ape)
    fill(800,200,900)
    rect(ape-50,ape=50,ape-50,cow+50)
    fill(800,800,500)
    rect(ape-50,cow,random(150,250),cow)
    fill(260,700,900)
    rect(random(10,250),cow-50,cow+20,ape)
    fill(100,290,600)
    rect(ape+20,ape-30,ape,cow)
    fill(500,200,500)
    rect(ape,cow,ape,cow)
    fill(700,200,500)
    rect(random(150,550),cow,cow,ape)
    fill(800,200,900)
    rect(ape+250,ape=50,ape-200,cow+30)
    fill(800,800,500)
    rect(ape+250,random(150,250),ape+540,cow)
    fill(260,700,900)
    rect(cow,cow+250,cow+240,ape)
    fill(100,290,600)
    rect(random(150,250),ape+360,ape,cow)
  }else {
    rect(0,0,0,0)
  }
}
