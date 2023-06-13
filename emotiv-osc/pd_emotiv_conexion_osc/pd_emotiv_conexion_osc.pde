import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

float variable; // esta es la variable que manda Pd

void setup()
{
  size(300,300);
  background(255);
  
  oscP5 = new OscP5(this,12000); //inicializo el servidro OSC
  myRemoteLocation = new NetAddress("127.0.0.1",12000); //asigno el puerto de comunicacion
}

void draw()
{
  background(255);
ellipse(width/2,height/2,variable*width,variable*height);
}

//para oir las variables que vienen desde Pd
void oscEvent(OscMessage theOscMessage) {
  if(theOscMessage.checkAddrPattern("/Insight/Back")==true){
    if(theOscMessage.checkTypetag("f")) {
      variable = theOscMessage.get(0).floatValue();
      println(variable);
      return;
    }
  }
}
