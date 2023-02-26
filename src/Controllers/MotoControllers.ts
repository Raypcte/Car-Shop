import { Request, Response } from 'express';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoService from '../Services/MotoServices';

const BAD_REQUEST = 'BAD REQUEST';

export default class MotoController {
  private req: Request;
  private res: Response;
  private service: MotoService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotoService();
  }

  public async create() {
    const moto: IMotorcycle = this.req.body;

    try {
      const newMoto: Motorcycle | null = await this.service.create(moto);
      this.res.status(201).json(newMoto);
      return newMoto;
    } catch (error) {
      return this.res.status(500).json({ message: BAD_REQUEST });
    }
  }
}
