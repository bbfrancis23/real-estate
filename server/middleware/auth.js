const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Access denied. No token provided.');

  console.log(token);

  try {
    const decoded = jwt.verify(token, 'maeglin');
    req.account = decoded;
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
}