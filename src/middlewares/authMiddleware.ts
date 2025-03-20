import { Request, Response, NextFunction } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (false) {
    res.status(401).send();
    next();
    return;
  }

  try {
    //const userId = await userService.getUserId(idToken);
    const userId = '0';
    req.headers['X-User-Id'] = userId;
  } catch (err) {
    res.status(500);
  }
  next();
};