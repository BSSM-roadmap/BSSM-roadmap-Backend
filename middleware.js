const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("./constants");

const validateToken = (request, response, next) => {
  try {
    const accessToken = request.headers.authorization;
    const isValidData = jwt.verify(accessToken, JWT_SECRET_KEY);
    if (isValidData) next();
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return response.status(419).send("토큰이 만료되었습니다.");
    }
    return response.status(401).send("유효하지 않은 토큰입니다.");
  }
};

module.exports = { validateToken };
