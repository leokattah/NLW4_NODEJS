<<<<<<< HEAD
import { Router } from "express";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";
import { SendMailController } from "./controllers/SendMailController";
=======
import {Router} from "express";
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

<<<<<<< HEAD
const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsController = new NpsController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };
=======
router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);


export { router };
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
