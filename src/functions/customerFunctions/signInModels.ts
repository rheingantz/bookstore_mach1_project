import { executeQuery } from "../queryExecution";
import Joi from "Joi";

const argon2 = require("argon2");

async function signInModel(
  name: string,
  surname: string,
  cpf: string,
  email: string,
  password: string
) {
  const schema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    cpf: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate({
    name,
    surname,
    cpf,
    email,
    password,
  });

  if (error) {
    throw new Error(`Parâmetros inválidos: ${error.details[0].message}`);
  }

  const existingEmail = await executeQuery(
    "SELECT * FROM clientes WHERE email = $1",
    [email]
  );
  if (existingEmail.length > 0) {
    throw new Error("Email already signed in");
  }

  const existingCpf = await executeQuery(
    "SELECT * FROM clientes WHERE cpf = $1",
    [cpf]
  );
  if (existingCpf.length > 0) {
    throw new Error("CPF already signed in");
  }

  const hashedPassword = await argon2.hash(password);
  const query =
    "INSERT INTO public.clientes(nome, sobrenome, cpf, email, senha) VALUES ($1, $2, $3, $4, $5);";
  const newCustomerDB = await executeQuery(query, [
    name,
    surname,
    cpf,
    email,
    hashedPassword,
  ]);
  return newCustomerDB;
}

export { signInModel };
