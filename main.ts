input.onButtonPressed(Button.A, function () {
    猴.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    game.resume()
    game.setScore(0)
    移動 = 1
    時間 = 500
})
input.onButtonPressed(Button.B, function () {
    猴.change(LedSpriteProperty.X, 1)
})
let 香蕉: game.LedSprite = null
let 時間 = 0
let 移動 = 0
let 猴: game.LedSprite = null
猴 = game.createSprite(2, 4)
移動 = 0
basic.forever(function () {
    if (移動 == 1) {
        香蕉 = game.createSprite(randint(0, 4), 0)
        香蕉.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 4; index++) {
            香蕉.set(LedSpriteProperty.Y, index)
            basic.pause(時間)
        }
        香蕉.delete()
        時間 += -20
    }
})
basic.forever(function () {
    if (移動 == 1) {
        香蕉 = game.createSprite(randint(0, 4), 0)
        香蕉.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 5; index++) {
            if (香蕉.isDeleted()) {
                break;
            }
            if (index == 5) {
                香蕉.delete()
                移動 = 0
                game.pause()
                basic.showNumber(game.score())
            }
            香蕉.set(LedSpriteProperty.Y, index)
            basic.pause(時間)
        }
        香蕉.delete()
        時間 += -20
    }
})
basic.forever(function () {
    if (移動 == 1) {
        if (猴.isTouching(香蕉)) {
            game.addScore(1)
            香蕉.delete()
        }
    }
})
