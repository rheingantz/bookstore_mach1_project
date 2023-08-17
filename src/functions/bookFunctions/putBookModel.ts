import { executeQuery } from "../queryExecution";
import Joi from "Joi";

async function updateBook(id: number,
  name: string,
  barcode: string,
  publisherId: number,
  price: number,
  stock: number,
  languageId: number,
  description: string) {
    const schema = Joi.object({
      name: Joi.string(),
      barcode: Joi.string(),
      publisherId: Joi.number(),
      price: Joi.number(),
      stock: Joi.number(),
      languageId: Joi.number(),
      description: Joi.string(),
    });
  
    const { error } = schema.validate({
      name,
      barcode,
      publisherId,
      price,
      stock,
      languageId,
      description,
    });
  
    if (error) {
      throw new Error(`Parâmetros inválidos: ${error.details[0].message}`);
    }

  let query = "UPDATE livros SET";
  let changedProps: any = [];

  if (name) {
    changedProps.push(name);
    query += " nome=$" + changedProps.length + ",";
  }
  if (barcode) {
    changedProps.push(barcode);
    query += " cod_barra=$" + changedProps.length + ",";
  }
  if (publisherId) {
    changedProps.push(publisherId);
    query += " id_editora=$" + changedProps.length + ",";
  }
  if (price) {
    changedProps.push(price);
    query += " valor_livro=$" + changedProps.length + ",";
  }
  if (stock) {
    changedProps.push(stock);
    query += " estoque=$" + changedProps.length + ",";
  }
  if (languageId) {
    changedProps.push(languageId);
    query += " id_idioma=$" + changedProps.length + ",";
  }
  if (description) {
    changedProps.push(description);
    query += " descricao=$" + changedProps.length + ",";
  }

  query = query.slice(0, -1);
  query += " WHERE id = " + id;
  console.log(query);
  const updatedBookDB = await executeQuery(query, changedProps);
  return updatedBookDB;
}

export { updateBook };
