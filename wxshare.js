import wx from 'weixin-js-sdk';

function wxshare(imgurls,titles,descs,link,res) {
    /**
     * imgurls : 缩略图
     * titles : 分享标题
     * descs ： 分享摘要
     * link ： 分享地址（location.href.split('#')[0]）
     * res ：微信接口请求的必填参数
     */
    var that = this;
    var url = link; //分享的文章地址
    var appId = res.appId;
    var timestamp = res.timestamp;
    var nonceStr = res.noncestr;
    var signature = res.signature;
    var pic = imgurls;
    console.log(appId,timestamp,nonceStr,signature)
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData","onMenuShareTimeline", "onMenuShareAppMessage"]
    });

    wx.ready(function () {
        //分享朋友圈
        
        wx.updateTimelineShareData({
            title: titles, // 分享标题
            desc: descs, // 分享描述
            link: url, // 分享链接
            imgUrl: pic, // 分享图标
            // success: function () {
            //     // 用户确认分享后执行的回调函数
            //     console.log("success")
            //     alert("chenggong")
            // },
            // cancel: function () {
            //     // 用户取消分享后执行的回调函数
            //     console.log("failed")
            //     alert("failed")
            // }
        });
        // 分享好友
        wx.updateAppMessageShareData({
            title: titles, // 分享标题
            desc: descs, // 分享描述
            link: url, // 分享链接
            imgUrl: pic, // 分享图标
        })
    });
}
export default wxshare;