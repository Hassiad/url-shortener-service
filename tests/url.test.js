const request = require("supertest");
const app = require("../app");

describe("URL Shortener API", () => {
  let shortUrl;

  test("should encode a URL", async () => {
    const response = await request(app)
      .post("/api/encode")
      .send({ longUrl: "https://indicina.co" });
    expect(response.statusCode).toBe(200);
    expect(response.body.shortUrl).toBeDefined();
    shortUrl = response.body.shortUrl;
  });

  test("should decode a URL", async () => {
    const response = await request(app).post("/api/decode").send({ shortUrl });
    expect(response.statusCode).toBe(200);
    expect(response.body.longUrl).toBe("https://indicina.co");
  });

  test("should return statistics for a short URL", async () => {
    const urlPath = shortUrl.split("/").pop();
    const response = await request(app).get(`/api/statistic/${urlPath}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.data.hitCount).toBeDefined();
  });
});
