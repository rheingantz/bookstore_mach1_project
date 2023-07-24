import { executeQuery } from "./queryExecution";

async function getBooks(){
    const query = 'select id, nome, preco, estoque from livros';
    const booksBD = await executeQuery(query, []);
    console.log(booksBD);
    return booksBD;
}

async function getBookById(id:number){
    const query = 'select id, nome, preco, estoque from livros where id=$1';
    const params = [id];
    const bookBD = await executeQuery(query, params);
    console.log(bookBD);
    return bookBD;
}

export {getBooks, getBookById};