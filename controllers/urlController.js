const urlStorage = require("../models/urlStorage");
const { v4: uuidv4 } = require("uuid");
const catchAsync = require("../utils/catchAsync");

const generateShortUrl = () => {
  return uuidv4().slice(0, 6);
};

exports.encode = catchAsync(async (req, res, next) => {
  const { longUrl } = req.body;
  const shortUrl = generateShortUrl();

  urlStorage.saveUrl(shortUrl, longUrl);

  res.status(200).json({
    status: "success",
    shortUrl: `http://short.est/${shortUrl}`,
  });
});

exports.decode = catchAsync(async (req, res, next) => {
  const { shortUrl } = req.body;
  const urlPath = shortUrl.split("/").pop();
  const longUrl = urlStorage.getUrl(urlPath);

  if (longUrl) {
    urlStorage.incrementHitCount(urlPath);
    res.status(200).json({
      status: "success",
      longUrl,
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Short URL not found",
    });
  }
});

exports.statistics = catchAsync(async (req, res, next) => {
  const { urlPath } = req.params;
  const stats = urlStorage.getStats(urlPath);

  if (stats) {
    res.status(200).json({
      status: "success",
      data: stats,
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Short URL not found",
    });
  }
});
