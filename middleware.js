const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("./constants");

const validateToken = (request, response, next) => {
  try {
    const accessToken = request.headers.authorization;
    const isValidData = jwt.verify(accessToken, JWT_SECRET_KEY);
    if (isValidData) next();
  } catch (error) {
    console.log(error);
    return response.status(419).send("액세스 토큰이 만료되었습니다.");
  }
};

module.exports = { validateToken };
