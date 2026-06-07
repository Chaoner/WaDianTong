const { createRatingStars, getLineupDetail } = require("../../utils/data-query");

Page({
  data: {
    lineup: null,
    standIndex: 0,
    standDescription: "",
    effectMedia: null,
    effectPoster: "",
    effectVideoSrc: "",
    rateChoices: [1, 2, 3, 4, 5],
    userRating: 0,
    baseRatingAverage: 0,
    baseRatingCount: 0,
  },

  onLoad(options) {
    const lineup = getLineupDetail(options.lineupId || options.id);
    const effectMedia = lineup.media.effect[0];

    this.setData({
      lineup,
      standDescription: lineup.media.stand[0].description,
      effectMedia,
      effectPoster: effectMedia.poster || effectMedia.src,
      effectVideoSrc: effectMedia.type === "video" ? effectMedia.videoSrc || "" : "",
      baseRatingAverage: lineup.ratingAverage,
      baseRatingCount: lineup.ratingCount,
    });

    wx.setNavigationBarTitle({
      title: lineup.title,
    });
  },

  onStandChange(e) {
    const standIndex = e.detail.current;

    this.setData({
      standIndex,
      standDescription: this.data.lineup.media.stand[standIndex].description,
    });
  },

  getImageUrls(list) {
    return (list || []).filter((item) => item.src).map((item) => item.src);
  },

  previewImage(list, current) {
    const urls = this.getImageUrls(list);

    if (!urls.length) return;

    wx.previewImage({
      current: current || urls[0],
      urls,
    });
  },

  onPreviewStandImage(e) {
    this.previewImage(this.data.lineup.media.stand, e.currentTarget.dataset.src);
  },

  onPreviewAimImage(e) {
    this.previewImage(this.data.lineup.media.aim, e.currentTarget.dataset.src);
  },

  onPreviewEffectImage() {
    this.previewImage(this.data.lineup.media.effect, this.data.effectMedia.src);
  },

  onEffectVideoTap() {
    if (!this.data.effectVideoSrc) {
      wx.showToast({
        title: "视频素材待接入",
        icon: "none",
      });
      return;
    }

    const videoContext = wx.createVideoContext("effectVideo", this);
    videoContext.play();
    videoContext.requestFullScreen({ direction: 0 });
  },

  onRateTap(e) {
    const userRating = Number(e.currentTarget.dataset.rating);
    const baseAverage = this.data.baseRatingAverage;
    const baseCount = this.data.baseRatingCount;
    const nextCount = baseCount + 1;
    const nextAverage = (baseAverage * baseCount + userRating) / nextCount;
    const lineup = Object.assign({}, this.data.lineup, {
      ratingAverage: Number(nextAverage.toFixed(1)),
      ratingText: nextAverage.toFixed(1),
      ratingCount: nextCount,
      ratingStars: createRatingStars(nextAverage),
    });

    this.setData({
      lineup,
      userRating,
    });

    wx.showToast({
      title: "评分已记录",
      icon: "none",
    });
  },
});
