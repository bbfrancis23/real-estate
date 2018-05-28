const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(200).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, 'maeglin');
    req.account = decoded;
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
}
