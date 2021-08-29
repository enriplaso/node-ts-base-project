import { Service } from "typedi";
import Car from "../model/Car";

@Service()
class CarService {

  private readonly cars: Car[] = [
    { name: 'Ford' },
    { name: 'Audi' },
    { name: 'Mercedes' },
  ];
  constructor() { }

  async getAllCars(): Promise<Car[]> {

    //TDO handel connection to DB
    return this.cars;
  }
}

export default CarService;