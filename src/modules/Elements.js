const ClickUtil = require("./ClickUtil")

exports.signal = {
    oneClickComment: false,
    participate: false,
    iKnow: false,
    frequently: false,
    participated: false
}


exports.fudai = () => {
    return descContains("超级福袋").findOne(5e3)
}

const oneClickComment = {
    find: () => {
        console.log("等待 一键发表评论")
        return desc("一键发表评论").findOne()
    },
    comfirm: (element) => {
        return element.className() === "com.lynx.tasm.behavior.ui.view.UIView" ||
            element.className() === "com.lynx.tasm.behavior.text.FlattenUIText"
    }
}

const participate = {
    find: () => {
        console.log("等待 参与抽奖")
        return desc("参与抽奖").findOne()
    },
    comfirm: (element) => {
        return element.className() === "com.lynx.tasm.behavior.ui.view.UIView" ||
            element.className() === "com.lynx.tasm.behavior.text.FlattenUIText"
    }
}

const iKnow = {
    find: () => {
        console.log("等待 我知道了")
        return desc("我知道了").findOne()
    },
    comfirm: (element) => {
        return element.className() === "com.lynx.tasm.behavior.ui.view.UIView" ||
            element.className() === "com.lynx.tasm.behavior.text.FlattenUIText"
    }
}

const frequently = {
    find: () => {
        console.log("等待 確定")
        return className("android.widget.Button").text("确定").findOne()
    }
}

const participatedCancelUI = {
    find: () => {
        return className("com.lynx.tasm.behavior.ui.view.UIView").text("参与成功 等待开奖").findOne()
    },
    then: () => {
        this.signal.participated = true
        let element = className("android.widget.LinearLayout").findOne()
        var rect = element.bounds();
        var x = rect.centerX();
        var y = rect.centerY();
        console.log(click(x, y - 200))
    }
}

exports.elementInfos = {
    oneClickComment, participate, iKnow, frequently, participatedCancelUI
}

exports.resetSignal = () => {
    this.signal.oneClickComment = false
    this.signal.participate = false
    this.signal.participated = false
    this.signal.frequently = false
    this.signal.iKnow = false
    this.signal.oneClickComment = false
}



