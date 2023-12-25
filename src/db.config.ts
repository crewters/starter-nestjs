import { config } from "process";

const mysql = require('mysql2');
const { Client } = require('pg');

export const connection = new Client(
  "postgresql://crewter:QdUUJsPSLkgaereEcuYJqw@valley-nutria-5142.6zw.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
  );


const client = connection.connect();

console.log(client);
