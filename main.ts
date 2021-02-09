music.setBuiltInSpeakerEnabled(true)
let loopNum = 0
let freqout = 1500
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
