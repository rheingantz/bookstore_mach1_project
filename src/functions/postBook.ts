import { executeQuery } from "./queryExecution";
import Joi from "Joi";


async function insertBook(
    name: string,
    barcode: string,
    publisherId: number,
    price: number,
    stock: number,
    languageId: number,
    description: string
  ) {
    const schema = Joi.object({
      name: Joi.string().required(),
      barcode: Joi.string().required(),
      publisherId: Joi.number().required(),
      price: Joi.number().required(),
      stock: Joi.number().required(),
      languageId: Joi.number().required(),
      description: Joi.string().required(),
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
  
    const query = `INSERT INTO public.livros(
                nome, cod_barra, id_editora, valor_livro, estoque, id_idioma, descricao)
                VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  
    const params = [name, barcode, publisherId, price, stock, languageId, description];
  
    await executeQuery(query, params);
  }

export {insertBook};