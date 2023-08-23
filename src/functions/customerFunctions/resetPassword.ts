import { executeQuery } from "../queryExecution";
import Joi from "Joi";
import {
  beginTransaction,
  commitTransaction,
  rollbackTransaction,
} from "../transactionControll";

const argon2 = require("argon2");

async function resetPasswordModel(email: string, password: string) {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate({
    email,
    password,
  });

  if (error) {
    throw new Error(`Parâmetros inválidos: ${error.details[0].message}`);
  }

  try {
    await beginTransaction;

    const existingEmail = await executeQuery(
      "SELECT * FROM clientes WHERE email = $1",
      [email]
    );

    if (existingEmail.length === 0) {
      throw new Error("Email not registered");
    }

    const hashedPassword = await argon2.hash(password);
    const query = "UPDATE clientes SET senha = $1 WHERE email = $2";
    const newCustomerDB = await executeQuery(query, [hashedPassword, email]);

    await commitTransaction;

    return newCustomerDB;
  } catch (error) {
    console.error("Error creating new password", error);
    await rollbackTransaction;
  }
}

export { resetPasswordModel };
