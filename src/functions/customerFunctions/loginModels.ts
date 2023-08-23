import argon2 from "argon2";
import { executeQuery } from "../queryExecution";
import {
  beginTransaction,
  commitTransaction,
  rollbackTransaction,
} from "../transactionControll";

async function logIn(body: any) {
  try {
    await beginTransaction;

    const query = "SELECT * FROM clientes WHERE email = $1";

    const result = await executeQuery(query, [body.email]);

    if (result === null) {
      return false;
    }

    const password_hash = result;

    const isPasswordValid: boolean = await argon2.verify(
      password_hash[0].senha,
      body.password
    );

    await commitTransaction;

    return isPasswordValid;
  } catch (error) {
    console.error("Error loging in", error);
    await rollbackTransaction;
  }
}

export { logIn };
