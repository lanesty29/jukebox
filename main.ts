input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
    basic.showIcon(IconNames.Heart)
    basic.showNumber(123)
    for (let index = 0; index < 4; index++) {
        basic.showString("happy birthday to you")
    }
})
