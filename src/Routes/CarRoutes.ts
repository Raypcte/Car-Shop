import { Router, Request, Response } from 'express';
import CarController from '../Controllers/carControllers';

const carRoutes: Router = Router();

carRoutes.post(
  '/cars',
  (req: Request, res: Response) => new CarController(req, res).create(),
);

export default carRoutes;
