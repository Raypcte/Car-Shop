import { Request, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/carServices';

export default class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;

    try {
      const newCar: Car | null = await this.service.create(car);
      this.res.status(201).json(newCar);
      return newCar;
    } catch (error) {
      return this.res.status(500).json({ message: 'BAD REQUEST' });
    }
  }
}
