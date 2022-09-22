const jwt =  require('jsonwebtoken');

require('dotenv').config();

const authenticateToken = (req, res, next) => { 

  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if(token == null)  return res.status(401).json({ message: 'token not found' }); 

  jwt.verify(token, process.env.ACCESS_TOKEN, err=>{

   if (err)  return res.status(403).json({ message: "invalid token" }); 

   next();

  });

};


module.exports = { authenticateToken }