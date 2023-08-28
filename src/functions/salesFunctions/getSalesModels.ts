import { executeQuery } from "../queryExecution";
import {
  beginTransaction,
  commitTransaction,
  rollbackTransaction,
} from "../transactionControll";

async function getSalesModel() {
  const query =
    "select venda.id, venda.id_cliente, clientes.nome as cliente, venda.data_venda, itens_venda.id as itens_venda_id, itens_venda.id_livro, livros.nome as titulo, itens_venda.quantidade, itens_venda.valor_unitario from venda inner join itens_venda on venda.id = itens_venda.id_venda inner join clientes on venda.id_cliente = clientes.id inner join livros on itens_venda.id_livro = livros.id";
  const salesDB = await executeQuery(query, []);
  return salesDB;
}

async function getSaleByIdModel(id: number) {
  try {
    beginTransaction;
    const query =
      "select venda.id, venda.id_cliente, clientes.nome as cliente, venda.data_venda, itens_venda.id as itens_venda_id, itens_venda.id_livro, livros.nome as titulo, itens_venda.quantidade, itens_venda.valor_unitario, total_venda from venda inner join itens_venda on venda.id = itens_venda.id_venda inner join clientes on venda.id_cliente = clientes.id inner join livros on itens_venda.id_livro = livros.id where venda.id=$1";
    const params = [id];
    const userBD = await executeQuery(query, params);
    commitTransaction;
    return userBD;
  } catch (error) {
    console.error("Error fetching post sales", error);
    rollbackTransaction;
    throw error;
  }
}

async function getSalesByDateModel(startDate: any, endDate: any) {
  const query =
    "select venda.id, venda.id_cliente, clientes.nome as cliente, venda.data_venda, itens_venda.id as itens_venda_id, itens_venda.id_livro, livros.nome as titulo, itens_venda.quantidade, itens_venda.valor_unitario, total_venda from venda inner join itens_venda on venda.id = itens_venda.id_venda inner join clientes on venda.id_cliente = clientes.id inner join livros on itens_venda.id_livro = livros.id where data_venda between $1 and $2";
  const dates = [startDate, endDate];
  const saleDB = await executeQuery(query, dates);
  return saleDB;
}

async function getUserSales(userEmail: string) {
  try{
  beginTransaction;
  const query = "select venda.id, venda.id_cliente, clientes.nome as cliente, venda.data_venda, itens_venda.id as itens_venda_id, itens_venda.id_livro, livros.nome as titulo, itens_venda.quantidade, itens_venda.valor_unitario, total_venda from venda inner join itens_venda on venda.id = itens_venda.id_venda inner join clientes on venda.id_cliente = clientes.id inner join livros on itens_venda.id_livro = livros.id where clientes.email=$1";
  const params = [userEmail];
  const userSale = await executeQuery(query, params);
  commitTransaction;
  return userSale;
} catch (error) {
  console.error("Error fetching post sales", error);
  rollbackTransaction;
  throw error;
}
};

export { getSalesModel, getSaleByIdModel, getSalesByDateModel, getUserSales };
