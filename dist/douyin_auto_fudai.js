(()=>{var e={746:(e,i)=>{i.click=e=>{var i=e.bounds(),n=i.centerX(),t=i.centerY();click(n,t)}},621:function(e,i,n){n(746),i.signal={oneClickComment:!1,participate:!1,iKnow:!1,frequently:!1,participated:!1},i.fudai=()=>descContains("超级福袋").findOne(5e3);const t={find:()=>(console.log("等待 一键发表评论"),desc("一键发表评论").findOne()),comfirm:e=>"com.lynx.tasm.behavior.ui.view.UIView"===e.className()||"com.lynx.tasm.behavior.text.FlattenUIText"===e.className()},o={find:()=>(console.log("等待 参与抽奖"),desc("参与抽奖").findOne()),comfirm:e=>"com.lynx.tasm.behavior.ui.view.UIView"===e.className()||"com.lynx.tasm.behavior.text.FlattenUIText"===e.className()},a={find:()=>(console.log("等待 我知道了"),desc("我知道了").findOne()),comfirm:e=>"com.lynx.tasm.behavior.ui.view.UIView"===e.className()||"com.lynx.tasm.behavior.text.FlattenUIText"===e.className()},l={find:()=>(console.log("等待 確定"),className("android.widget.Button").text("确定").findOne())},s={find:()=>className("com.lynx.tasm.behavior.ui.view.UIView").text("参与成功 等待开奖").findOne(),then:()=>{this.signal.participated=!0;var e=className("android.widget.LinearLayout").findOne().bounds(),i=e.centerX(),n=e.centerY();console.log(click(i,n-200))}};i.elementInfos={oneClickComment:t,participate:o,iKnow:a,frequently:l,participatedCancelUI:s},i.resetSignal=()=>{this.signal.oneClickComment=!1,this.signal.participate=!1,this.signal.participated=!1,this.signal.frequently=!1,this.signal.iKnow=!1,this.signal.oneClickComment=!1}}},i={};function n(t){var o=i[t];if(void 0!==o)return o.exports;var a=i[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}const t=n(621),o=n(746);function a(e,i){for(console.log("开启",i);;){let n=e.find();console.log("找到",i),n.visibleToUser()&&(n.comfirm&&!e.comfirm(n)||(n.then?n.then():(o.click(n),console.log("clicked",i),console.log(JSON.stringify(t.signal)),sleep(2e3),t.signal[i]=!0)))}}for(var l in t.elementInfos){let e=l,i=t.elementInfos[l];t.elementInfos.hasOwnProperty(l)&&threads.start((()=>{a(i,e)}))}for(;;){if(!t.signal.participated&&!t.signal.oneClickComment&&!t.signal.participate){console.log("寻找福袋");let e=t.fudai();e&&(o.click(e),console.log("clicked fudai"),sleep(5e3))}t.signal.iKnow&&(t.resetSignal(),console.log(JSON.stringify(t.signal)))}})();