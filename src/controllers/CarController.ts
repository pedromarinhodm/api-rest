import { Request, Response } from 'express';
import CarModels from '../database/CarModels';

const CarController = {

    async index(req: Request, res: Response): Promise<Response>{

        let cars = await CarModels.find() 
        return res.json(cars)
    },

    async findById(req: Request, res: Response): Promise<Response>{
        
        const { id } = req.params
        let car = await CarModels.findById(id) 
        return res.json(car)
    },

    async create(req: Request, res: Response): Promise<Response>{

        let car = await CarModels.create(req.body) 
        return res.json(car)
    },

    async update(req: Request, res: Response): Promise<Response>{
        
        const { id } = req.params
        let car = await CarModels.findByIdAndUpdate(id, req.body) 
        return res.json(car)
    },



}

export default CarController;