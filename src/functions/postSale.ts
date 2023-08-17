import { executeIdGet } from "./queryIdGet";
import Joi from "Joi";

async function insertSale(
  id_customer: number,
  sale_items: Array<{
    id_book: number;
    quantity: number;
    unit_price: number;
  }>
) {
  const schema = Joi.object({
    id_customer: Joi.number().required(),
    sale_items: Joi.array()
      .items(
        Joi.object({
          id_book: Joi.number().required(),
          quantity: Joi.number().required(),
          unit_price: Joi.number().required(),
        })
      )
      .min(1)
      .required(),
  });

  const { error } = schema.validate({
    id_customer: id_customer,
    sale_items: sale_items,
  });

  if (error) {
    throw new Error(`Parâmetros inválidos: ${error.details[0].message}`);
  }

  let totalCost = 0;
  for (const saleItem of sale_items) {
    totalCost += saleItem.quantity * saleItem.unit_price;
  }

  const saleQuery = `INSERT INTO public.venda(id_cliente, total_venda, data_venda)
    VALUES ($1, $2, NOW())`;

  const saleParams = [id_customer, totalCost];

  const currentSaleId = await executeIdGet(saleQuery, saleParams);

  for (const saleItem of sale_items) {

    let itemQuery =
      "INSERT INTO public.itens_venda(id_venda, id_livro, quantidade, valor_unitario) VALUES ($1, $2, $3, $4)";

    let itemParams = [currentSaleId, saleItem.id_book, saleItem.quantity, saleItem.unit_price]

    await executeIdGet(itemQuery, itemParams)

  }

}

export { insertSale };
