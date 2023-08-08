export { executeQuery } from '../functions/queryExecution';
import argon2 from 'argon2';
import { executeQuery } from './queryExecution';

async function logIn(body:any){

    const query = 'SELECT * FROM clientes WHERE email = $1';

    const result = await executeQuery(query, [body.email]);

if (result === null) {
  return false;
}

const password_hash = result;

const isPasswordValid:boolean = await argon2.verify(password_hash[0].senha, body.password);

return isPasswordValid;

}

export { logIn };