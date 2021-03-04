<<<<<<< HEAD
import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "test"
          ? "./src/database/database.test.sqlite"
          : defaultOptions.database,
    })
  );
};
=======
import { Connection, createConnection, CreateDateColumn, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {

const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test' ?
      "./src/database/database.test.sqlite" :
      defaultOptions.database
    })
  );
}

>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
