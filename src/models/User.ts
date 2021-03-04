import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
<<<<<<< HEAD
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
=======
import {v4 as uuid} from "uuid"


@Entity("users")
  class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
      if(!this.id){
        this.id = uuid();
      }
    }
  }
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5

export { User };
