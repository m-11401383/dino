basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.servoWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 100) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
