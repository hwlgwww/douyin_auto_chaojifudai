const Elements = require("./modules/Elements")
const ClickUtil = require('./modules/ClickUtil')

const CLICK_INERVAL = 2e3

function clickElementTask(elementInfo, name) {
    console.log("开启", name)
    while (true) {
        let element = elementInfo.find()
        console.log("找到", name)
        if (!element.visibleToUser()) continue
        if (element.comfirm && !elementInfo.comfirm(element))
            continue
        if (element.then) {
            element.then()
        } else {
            ClickUtil.click(element)
            console.log('clicked', name)
            console.log(JSON.stringify(Elements.signal))
            sleep(CLICK_INERVAL)
            Elements.signal[name] = true
        }
    }
}

for (var key in Elements.elementInfos) {
    let name = key
    let fun = Elements.elementInfos[key]
    if (Elements.elementInfos.hasOwnProperty(key)) {
        threads.start(() => {
            clickElementTask(fun, name)
        })
    }
}

while (true) {

    if (!Elements.signal.participated && !Elements.signal.oneClickComment && !Elements.signal.participate) {
        console.log("寻找福袋")
        let fudai = Elements.fudai()
        if (fudai) {
            ClickUtil.click(fudai)
            console.log("clicked fudai")
            sleep(5e3)
        }
    }
    if (Elements.signal.iKnow) {
        Elements.resetSignal()
        console.log(JSON.stringify(Elements.signal))
    }

}