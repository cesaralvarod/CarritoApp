#include <SoftwareSerial.h>

/*
BLUETOOTH MODULE
CONEXIONES PIN

*/

// PINES

// Motor
const int PIN_MOTOR_ON = 6; // turn on | turn off
const int PIN_MOTOR_SPEED = 11; // Speed

const int PIN_MOTOR_DIR1 = 9; // Direction
const int PIN_MOTOR_DIR2 = 10; // Direction

// Bluetooth
const byte rxPin = 2; // Reception
const byte txPin = 3; // Transmition

// State motor
boolean motor_on = false;
char dir_motor = 'r'; // right (r) or left(l)
int speed_motor = 0; // 0 -> 5

String blt_command = "";

// SoftwareSerial object
SoftwareSerial bluetooth(rxPin, txPin);

char NAME[10] = "BLT_BTMC";
char PASSWORD[10] = "12345678";
char BAUD = 4;

void turnon_motor() {
    // Turn on motor
    digitalWrite(PIN_MOTOR_ON, HIGH);
    motor_on = true;
    delayMicroseconds(1000);
}

void turnoff_motor() {
    // Turn off motor
    digitalWrite(PIN_MOTOR_ON, LOW);
    motor_on = false;
    delayMicroseconds(1000);
}

void set_speed(String speed) {
    if(motor_on) {
        speed_motor = speed.toInt() * 50; // 0 -> 255
        Serial.println(speed_motor);
        analogWrite(PIN_MOTOR_SPEED, speed_motor);
        delayMicroseconds(1000);
    }
}

void set_direction(char dir) {
    switch (dir) {
    case 'r':
        digitalWrite(PIN_MOTOR_DIR1, HIGH);
        digitalWrite(PIN_MOTOR_DIR2, LOW);
        dir_motor = 'r';
        delayMicroseconds(1000);
        break;
    case 'l':
        digitalWrite(PIN_MOTOR_DIR1, LOW);
        digitalWrite(PIN_MOTOR_DIR2, HIGH);
        dir_motor = 'l';
        delayMicroseconds(1000);
        break;
    }
}

void setup() {
    // define pin modes for TX and RX
    pinMode(rxPin, INPUT);
    pinMode(txPin, OUTPUT);

    // define motor pins
    pinMode(PIN_MOTOR_ON, OUTPUT);
    pinMode(PIN_MOTOR_SPEED, OUTPUT);
    pinMode(PIN_MOTOR_DIR1, OUTPUT);
    pinMode(PIN_MOTOR_DIR2, OUTPUT);

    // Set direction motor
    set_direction('r');

    Serial.begin(9600);
    // Set the baud rate for the SoftwareSerial object
    bluetooth.begin(9600);

    Serial.println("Starting...");
}

void loop() {
    if(bluetooth.available()) {
        blt_command = "";
        char c = bluetooth.read();
        Serial.println(c);
        blt_command = c;

        if(blt_command == "a") {
            turnoff_motor();
        } else if (blt_command == "e") {
            turnon_motor();
        } else if(blt_command == "r") {
            set_direction('r');
        } else if (blt_command == "l") {
            set_direction('l');
        } else if (blt_command == "0" || blt_command=="1" || blt_command =="2"|| blt_command=="3" || blt_command == "4" || blt_command=="5") {
            set_speed(blt_command);
        }
    }
}
