const app = require("./app");

const PORT = process.env.PORT || 3579;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
