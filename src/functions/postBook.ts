import { executeQuery } from "./queryExecution";
import { IBookPost } from "../interfaces/bookInterface";

async function postBook(body:IBookPost){
    console.log(body.nome);
    const query = 'INSERT INTO livros(nome, codigo_barras, id_editora, preco, estoque, id_idioma) VALUES ($1, $2, $3, $4, $5, $6)';
    const newBookDB = await executeQuery(query, [body.nome, body.codigo_barras, body.id_editora, body.preco, body.estoque, body.id_idioma]);
    return newBookDB;}

export {postBook};