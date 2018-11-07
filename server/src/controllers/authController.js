import * as bcrypt from 'bcrypt';
import * as basicAuth from 'basic-auth';
import * as jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import db from '../models';

async function attemptLogin(auth) {
  const user = await db.User.findOne({
    where: { username: { [Op.eq]: auth.name } },
  });
  if (!user) {
    const error = new Error();
    error.message = 'No User associated with that username';
    error.handled = true;
    throw error;
  }
  if (!(await bcrypt.compare(auth.pass, user.password))) {
    const error = new Error();
    error.message = 'Invalid credentials';
    error.handled = true;
    throw error;
  }
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.SECRET,
  ); // Need to expiration date
  return { token };
}

export async function login(req, res, next) {
  try {
    const credentials = basicAuth.parse(req.headers.authorization);
    res.send(await attemptLogin(credentials));
  } catch (error) {
    next(error);
  }
}

export function authenticate(req, res, next) {
  try {
    if (process.env.NODE_ENV === 'production') {
      const credentials = req.headers.authorization;
      jwt.verify(credentials, process.env.SECRET, (err, token) => {
        if (err) throw err;
        console.info(token);
        const nToken = jwt.sign(token, process.env.SECRET);
        res.status(200).send({ token: nToken });
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}
