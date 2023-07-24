import { executeQuery } from "./queryExecution";

async function getSalesByDate(date1:string, date2:string) {
    const query = 'select total_venda, data_venda from venda where data_venda between $1 and $2';
    const dates = [date1, date2];
    const saleDB = await executeQuery(query, dates);
    console.log(saleDB);
    return saleDB;
}

export {getSalesByDate};