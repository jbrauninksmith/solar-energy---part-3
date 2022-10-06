let position = -90
servos.motorPinPower(servos.MotorPin.Right, servos.Power.On)
basic.forever(function () {
    if (light.ifLuminance(light.LightPin.P1, light.Luminance.Intense) || light.ifLuminance(light.LightPin.P1, light.Luminance.Bright)) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        servos.turnServo(servos.ServoPin.P8, position)
        basic.pause(20)
    }
})
