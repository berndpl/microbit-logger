datalogger.onLogFull(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        . # # # .
        `)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "Temperatur",
    "Licht"
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"Temperatur",
"Licht"
)
loops.everyInterval(60000, function () {
    if (true) {
        basic.showIcon(IconNames.Heart)
        datalogger.log(
        datalogger.createCV("Temperatur", input.temperature()),
        datalogger.createCV("Licht", input.lightLevel())
        )
        basic.clearScreen()
    }
})
