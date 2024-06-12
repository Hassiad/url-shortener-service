class URLStorage {
  constructor() {
    this.urls = new Map();
    this.stats = new Map();
  }

  saveUrl(shortUrl, longUrl) {
    this.urls.set(shortUrl, longUrl);
    this.stats.set(shortUrl, { createdAt: new Date(), hitCount: 0 });
  }

  getUrl(shortUrl) {
    return this.urls.get(shortUrl);
  }

  incrementHitCount(shortUrl) {
    const stats = this.stats.get(shortUrl);
    if (stats) {
      stats.hitCount += 1;
    }
  }

  getStats(shortUrl) {
    return this.stats.get(shortUrl);
  }
}

module.exports = new URLStorage();
