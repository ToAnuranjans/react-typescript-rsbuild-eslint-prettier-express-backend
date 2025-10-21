import { Router } from 'express';
import { fetchTopUsers } from '../services/userService.js';

const apiRouter = Router();

apiRouter.get('/users/top', async (_req, res, next) => {
  try {
    const users = await fetchTopUsers(5);
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default apiRouter;
