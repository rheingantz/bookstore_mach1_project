import { executeQuery } from "./queryExecution";

async function getBooks(){
    const query = 'select id, nome, id_editora, valor_livro, estoque from livros';
    const booksBD = await executeQuery(query, []);
    return booksBD;
}

async function getBookById(id:number){
    const query = 'select id, nome, id_editora, valor_livro, estoque from livros where id=$1';
    const params = [id];
    const bookBD = await executeQuery(query, params);
    return bookBD;
}

// async function getBookByPublisher(name:string)

export {getBooks, getBookById};