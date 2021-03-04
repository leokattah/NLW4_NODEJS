import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
<<<<<<< HEAD
import { v4 as uuid } from "uuid";

@Entity("surveys")
class Survey {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Survey };
=======
import {v4 as uuid} from "uuid"


@Entity("Surveys")
class Survey {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
      if(!this.id){
        this.id = uuid();
      }
    }
  }
export {Survey}
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
