import { Router, Request, Response } from 'express';
import CarController from '../Controllers/carControllers';

const carRoutes: Router = Router();

carRoutes.post('/cars', (req: Request, res: Response) =>
  new CarController(req, res).create());

carRoutes.get('/cars', (req: Request, res: Response) =>
  new CarController(req, res).getAll());

carRoutes.get('/cars/:id', (req: Request, res: Response) =>
  new CarController(req, res).getOne());

export default carRoutes;
