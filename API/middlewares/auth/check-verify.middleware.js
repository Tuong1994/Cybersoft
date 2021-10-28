const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  // const token = req.header("accessToken");
  try {
    const secretKey = "prophet456";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send("Bạn chưa đăng nhập");
  }
};

const authorize = (arrRole) => (req, res, next) => {
  const { user } = req;
  if (arrRole.findIndex((role) => user.maLoaiNguoiDung === role) > -1) {
    next();
  } else {
    res.status(401).send("Bạn không quyền thực hiện chức năng này");
  }
};

module.exports = {
  authenticate,
  authorize,
};
