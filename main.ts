music.setBuiltInSpeakerEnabled(true)
let freqout = 1500
let loopNum = 0
serial.writeValue("Loop", loopNum)
serial.writeValue("Frequency", freqout)
basic.pause(100)
while (freqout <= 6000) {
    music.playTone(freqout, 100)
    loopNum += 1
    freqout += 500
    serial.writeValue("Loop", loopNum)
    serial.writeValue("Frequency", freqout)
}
