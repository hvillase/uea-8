import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

float variable; // esta es la variable que manda Insight2OSC, verificar si es flotante o entero, y si manda un arreglo de valores

void setup()
{
  size(300, 300); // tamaño de lienzo
  background(255); // color de background
  
  oscP5 = new OscP5(this,12000); //inicializo el servidor OSC
  myRemoteLocation = new NetAddress("127.0.0.1", 12000); //asigno el puerto de comunicación 12000
}

// Aquí van tus visuales
void draw()
{
  background(255);
ellipse(width/2,height/2,variable*width,variable*height);
}

// Para oescuchar los datos que vienen desde Insight2OSC
void oscEvent(OscMessage theOscMessage) {
  if(theOscMessage.checkAddrPattern("/Insight/Back")==true){
    if(theOscMessage.checkTypetag("f")) {
      variable = theOscMessage.get(0).floatValue();
      println(variable);
      return;
    }
  }
}
