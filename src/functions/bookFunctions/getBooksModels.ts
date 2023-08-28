import { executeQuery } from "../queryExecution";

async function getBooksModel() {
  const query =
    "select livros.id, livros.nome as titulo, livros.id_editora, editoras.nome as editora, livros.valor_livro, livros.estoque from livros inner join editoras on livros.id_editora = editoras.id";
  const booksBD = await executeQuery(query, []);
  return booksBD;
}

async function getBookByIdModel(id: number) {
  const query =
    "select livros.id, livros.nome as titulo, livros.id_editora, editoras.nome as editora, livros.valor_livro, livros.estoque from livros inner join editoras on livros.id_editora = editoras.id where livros.id=$1";
  const params = [id];
  const bookBD = await executeQuery(query, params);
  return bookBD;
}

export { getBooksModel, getBookByIdModel };
