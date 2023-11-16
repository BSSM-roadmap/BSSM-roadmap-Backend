const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { BsmOauth, BsmOauthError, BsmOauthErrorType } = require("bsm-oauth");

const BSM_AUTH_CLIENT_ID = process.env.BSM_AUTH_CLIENT_ID;
const BSM_AUTH_CLIENT_SECRET = process.env.BSM_AUTH_CLIENT_SECRET;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const DAYS_IN_A_MONTH = 30;
const SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR;
const SECONDS_IN_A_MONTH =
  SECONDS_IN_AN_HOUR * HOURS_IN_A_DAY * DAYS_IN_A_MONTH;

const app = express();

const bsmOauth = new BsmOauth(BSM_AUTH_CLIENT_ID, BSM_AUTH_CLIENT_SECRET);

app.use(cors({ origin: "*" }));

// bsm oauth 로그인
app.post("/login", async (req, res) => {
  const authCode = req.query.code;
  try {
    const token = await bsmOauth.getToken(authCode);
    const resource = await bsmOauth.getResource(token);

    const accessToken = jwt.sign(
      { "userCode": resource.userCode, "email": resource.email },
      JWT_SECRET_KEY,
      { expiresIn: SECONDS_IN_AN_HOUR },
    );
    const refreshToken = jwt.sign(
      {
        "userCode": resource.userCode,
        "email": resource.email,
        "nickname": resource.nickname,
      },
      JWT_SECRET_KEY,
      { expiresIn: SECONDS_IN_A_MONTH },
    );

    res.send({ accessToken, refreshToken });
  } catch (error) {
    if (!(error instanceof BsmOauthError)) {
      return;
    }
    if (error.type === BsmOauthErrorType.INVALID_CLIENT) {
      res.status(400).send("클라이언트 ID or 시크릿 오류");
    }
    if (error.type === BsmOauthErrorType.AUTH_CODE_NOT_FOUND) {
      res.status(404).send("인증코드가 없노");
    }
    if (error.type === BsmOauthErrorType.TOKEN_NOT_FOUND) {
      res.status(404).send("토큰이 없노");
    }
  }
});

// 로그인된 유저의 정보
app.get("/user", (req, res) => {
  res.send("테스트");
});

// 특정 유저의 로드맵 조회
app.get("/user/:userId/roadmap", (req, res) => {
  res.send("테스트");
});

// 로드맵 전체 조회
app.get("/roadmap", (req, res) => {
  res.send("테스트");
});

// 로드맵 상세 조회
app.get("/roadmap/:roadmapId", (req, res) => {
  res.send("테스트");
});

// 로드맵 작성
app.post("/roadmap/:roadmapId", (req, res) => {
  res.send("테스트");
});

// 로드맵 수정
app.put("/roadmap/:roadmapId", (req, res) => {
  res.send("테스트");
});

// 로드맵 삭제
app.delete("/roadmap/:roadmapId", (req, res) => {
  res.send("테스트");
});

// 로드맵 찜하기
app.post("/save/:roadmapId", (req, res) => {
  res.send("테스트");
});

// 로드맵 찜하기 취소
app.delete("/save/:roadmapId", (req, res) => {
  res.send("테스트");
});

// 찜하기 횟수
app.get("/save/:roadmapId", (req, res) => {
  res.send("테스트");
});

// 특정 유저의 찜한 로드맵 보기
app.get("/saved/:userId", (req, res) => {
  res.send("테스트");
});

app.listen(8080, () => {
  console.log("listen");
});
