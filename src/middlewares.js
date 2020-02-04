const four0FourMiddleWare = (req, res, next) => {
  const error = new Error(`Not found ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const otherErrorMiddleware = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "prod" ? "chippa" : error.stack
  });
};

module.exports = { four0FourMiddleWare, otherErrorMiddleware };
