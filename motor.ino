#include <SoftwareSerial.h>

// PINES
/*
---------------------------------------------------
PIN | TYPE     | DESCRIPTION
---------------------------------------------------
 6  | digital  | Turn on / Turn off motor
 11 | analogic | Set speed motor
 9  | digital  | L295N control
 10 | digital  | L295N control
 2  | digital  | Reception pin HC-06 Bluetooth
 3  | digital  | Reception pin HC-06 Bluetooth
---------------------------------------------------

*/

// Motor
const int PIN_MOTOR_ON = 6; // turn on | turn off
const int PIN_MOTOR_SPEED = 11; // Speed

const int PIN_MOTOR_IN1 = 9; // Sense
const int PIN_MOTOR_IN2 = 10; // Sense

// Bluetooth
const byte PIN_RECEPTION_HC06 = 2; // Reception
const byte PIN_TRANSMITION_HC06 = 3; // Transmition

// State motor
boolean motor_on = false;
char dir_motor = 'r'; // right (r) or left(l)
int speed_motor = 0; // 0 -> 255

String blt_command = "";

// SoftwareSerial object
SoftwareSerial bluetooth(PIN_RECEPTION_HC06, PIN_TRANSMITION_HC06);

//char NAME[10] = "BLT_BTMC";
//char PASSWORD[10] = "12345678";
//char BAUD = 4;

void turnon_motor() {
    // Turn on motor
    digitalWrite(PIN_MOTOR_ON, HIGH);
    motor_on = true;
    delay(100);
}

void turnoff_motor() {
    // Turn off motor
    digitalWrite(PIN_MOTOR_ON, LOW);
    motor_on = false;
    delay(100);
}

void set_speed(String speed) {
    if(motor_on && speed.toInt()>=0 && speed.toInt()<=5) {
        speed_motor = speed.toInt() * 51; // 0 -> 255
        analogWrite(PIN_MOTOR_SPEED, speed_motor);
        delay(100);
    }
}

void set_direction(char dir) {
    switch (dir) {
    case 'r':
        digitalWrite(PIN_MOTOR_IN1, HIGH);
        digitalWrite(PIN_MOTOR_IN2, LOW);
        dir_motor = 'r';
        break;
    case 'l':
        digitalWrite(PIN_MOTOR_IN1, LOW);
        digitalWrite(PIN_MOTOR_IN2, HIGH);
        dir_motor = 'l';
        break;
    }
    delay(1000);
}

void setup() {
    // define pin modes for TX and RX
    pinMode(PIN_RECEPTION_HC06, INPUT);
    pinMode(PIN_TRANSMITION_HC06, OUTPUT);

    // define motor pins
    pinMode(PIN_MOTOR_ON, OUTPUT);
    pinMode(PIN_MOTOR_SPEED, OUTPUT);
    pinMode(PIN_MOTOR_IN1, OUTPUT);
    pinMode(PIN_MOTOR_IN2, OUTPUT);

    // Set direction motor
    set_direction('r');

    Serial.begin(9600);
    // Set the baud rate for the SoftwareSerial object
    bluetooth.begin(9600);

    Serial.println("Starting...");
}

void loop() {
    if(motor_on) {
        analogWrite(PIN_MOTOR_SPEED, speed_motor);
    } else {
        analogWrite(PIN_MOTOR_SPEED, 0);
        digitalWrite(PIN_MOTOR_IN1, LOW);
        digitalWrite(PIN_MOTOR_IN2, LOW);
    }

    if(bluetooth.available()) {
        blt_command = "";
        char c = bluetooth.read();
        blt_command = c;

        switch (c) {
        case 'a':
            turnoff_motor();
            break;
        case 'e':
            turnon_motor();
            break;
        case 'r':
            set_direction('r');
            break;
        case 'l':
            set_direction('l');
            break;
        case '0' || '1' || '2' || '3'|| '4' || '5':
            set_speed(blt_command);
            break;
        }
    }
}
