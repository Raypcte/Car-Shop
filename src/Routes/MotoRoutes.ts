import { Router, Request, Response } from 'express';
import MotoController from '../Controllers/MotoControllers';

const motoRoutes: Router = Router();

motoRoutes.post('/motorcycles', (req: Request, res: Response) =>
  new MotoController(req, res).create());

export default motoRoutes;
