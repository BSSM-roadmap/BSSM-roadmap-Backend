const jwt = require("jsonwebtoken");
const models = require("../models");
const user = require("./user");
const { JWT_SECRET_KEY } = require("../constants");

const generateToken = ({ ...rest }, expiresIn) => {
  try {
    const token = jwt.sign({ ...rest }, JWT_SECRET_KEY, {
      expiresIn,
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

const decodeToken = (token) => {
  try {
    const data = jwt.decode(token, JWT_SECRET_KEY);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (resource) => {
  try {
    const { userCode } = resource;
    const { name, enrolledAt, grade, classNo } = resource.student;
    const defaults = { name, enrolledAt, grade, classNo, userCode };

    const [{ dataValues }] = await models.User.findOrCreate({
      where: { userCode: userCode },
      defaults: defaults,
    });

    const accessToken = generateToken(
      { userCode, userId: dataValues.userId },
      "5s",
    );
    const refreshToken = generateToken(
      { userCode, userId: dataValues.userId },
      "30d",
    );

    return { accessToken, refreshToken };
  } catch (error) {
    console.log("로그인 중 에러");
  }
};

module.exports = { generateToken, decodeToken, loginUser };
