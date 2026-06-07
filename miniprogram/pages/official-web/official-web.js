Page({
  data: {
    url: "",
  },

  onLoad(options) {
    const title = decodeURIComponent(options.title || "无畏契约官网");
    const url = decodeURIComponent(options.url || "https://val.qq.com/main.html");

    this.setData({ url });

    wx.setNavigationBarTitle({ title });
  },
});
