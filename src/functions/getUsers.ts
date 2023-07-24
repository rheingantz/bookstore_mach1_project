import { executeQuery } from "./queryExecution";

async function getUsers(){
    const query = 'select id, nome, sobrenome from atendentes'
    const usersDB = await executeQuery(query, []);
    console.log(usersDB);
    return usersDB;
}

async function getUserById(id:number){
    const query = 'select id, nome, sobrenome from atendentes where id=$1';
    const params = [id];
    const userBD = await executeQuery(query, params);
    console.log(userBD);
    return userBD;
}

export {getUsers, getUserById};