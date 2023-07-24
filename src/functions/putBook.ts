import { executeQuery } from "./queryExecution";
import { IBookPut } from "../interfaces/bookInterface";

async function putBook(id: number, body: IBookPut) {
  let query = "UPDATE livros SET";
  let changedProps: any = [];

  if (body.nome) {
    changedProps.push(body.nome);
    query += " nome=$" + changedProps.length + ",";
  }
  if (body.codigo_barras) {
    changedProps.push(body.codigo_barras);
    query += " codigo_barras=$" + changedProps.length + ",";
  }
  if (body.id_editora) {
    changedProps.push(body.id_editora);
    query += " codigo_barras=$" + changedProps.length + ",";
  }
  if (body.preco) {
    changedProps.push(body.preco);
    query += " codigo_barras=$" + changedProps.length + ",";
  }
  if (body.estoque) {
    changedProps.push(body.estoque);
    query += " codigo_barras=$" + changedProps.length + ",";
  }
  if (body.id_idioma) {
    changedProps.push(body.id_idioma);
    query += " codigo_barras=$" + changedProps.length + ",";
  }

  query = query.slice(0, -1);
  query += " WHERE id=" + id;
  console.log(query);
  const updatedBookDB = await executeQuery(query, changedProps);
  return updatedBookDB;
}

export { putBook };
