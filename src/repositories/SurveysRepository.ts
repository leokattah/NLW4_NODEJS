import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";
<<<<<<< HEAD

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };
=======
import { User } from "../models/User";

@EntityRepository(Survey)
class SurveysRepository extends Repository <Survey> {}

export {SurveysRepository};
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
