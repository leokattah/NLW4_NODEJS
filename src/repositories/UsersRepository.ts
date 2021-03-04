<<<<<<< HEAD
import { EntityRepository, Repository } from 'typeorm';

import { User } from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };
=======
import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UsersRepository extends Repository <User> {}

export {UsersRepository};
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
