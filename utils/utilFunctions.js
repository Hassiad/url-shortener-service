const AppError = require("../utils/appError");

const checkRequiredFields = (req, res, next, fields) => {
  const missingFields = fields.filter(
    (field) => !req.body[field] || req.body[field] === ""
  );
  if (missingFields.length > 0) {
    return next(
      new AppError(
        `Provide required parameters: ${missingFields.join(", ")}`,
        400
      )
    );
  }
};

const randomCharacters = (length = 10, type = "number") => {
  const charTypes = {
    number: "0123456789",
    string: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    mix: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };

  const characters = charTypes[type] || charTypes.number;
  const charactersLength = characters.length;
  let result = "";

  while (result.length < length) {
    result += characters[Math.floor(Math.random() * charactersLength)];
  }

  return result.slice(0, length);
};

module.exports = {
  checkRequiredFields,
  randomCharacters,
};
