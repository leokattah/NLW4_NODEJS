<<<<<<< HEAD
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({
      title,
      description,
=======
import {Request , Response} from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";



class SurveysController {

  async create(request: Request, response: Response) {
    const {title , description} = request.body;
    const surveysRepository = getCustomRepository(SurveysRepository);
    const survey = surveysRepository.create({
      title,
      description
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
    });

    await surveysRepository.save(survey);

    return response.status(201).json(survey);
  }
<<<<<<< HEAD

  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const all = await surveysRepository.find();

=======
  async show (request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository);
    const all = await surveysRepository.find();
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
    return response.json(all);
  }
}

<<<<<<< HEAD
export { SurveysController };
=======
export {SurveysController};
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
