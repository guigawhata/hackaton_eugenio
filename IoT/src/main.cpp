#include <Arduino.h>
#include <Pump.h>
#include <Sensor.h>

void setup() {
  Serial.begin(115200);
  Serial.println();
  Sensor.setup();
  Pump.setup();

}

void loop() {
  
}