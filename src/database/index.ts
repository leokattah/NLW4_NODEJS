import { Connection, createConnection, CreateDateColumn } from 'typeorm';

export default async (): Promise<Connection> => {
  return createConnection();
}

