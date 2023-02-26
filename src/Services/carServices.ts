import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/carModels';

export default class CarService {
  public createCarDomain(car: ICar | null): Car | null {
    if (car?.id) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);    
    return this.createCarDomain(newCar);
  }
}
