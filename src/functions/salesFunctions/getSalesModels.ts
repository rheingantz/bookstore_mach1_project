import { executeQuery } from "../queryExecution";
import { beginTransaction, commitTransaction, rollbackTransaction } from "../transactionControll";

async function getSalesModel() {
    const query = "select * from venda";
    const salesDB = await executeQuery(query, []);
    return salesDB
}

async function getSaleByIdModel(id:number){
    try{
        await beginTransaction
    const query = 'select id, total_venda, data_venda from venda where id=$1';
    const params = [id];
    const userBD = await executeQuery(query, params);
    await commitTransaction;
    return userBD;   
    } catch (error) {
        console.error("Error fetching post sales", error);
        await rollbackTransaction;
      }
}

async function getSalesByDateModel(startDate:any, endDate:any) {
    const query = 'select id, total_venda, data_venda from venda where data_venda between $1 and $2';
    const dates = [startDate, endDate];
    const saleDB = await executeQuery(query, dates);
    return saleDB;
}

export {getSalesModel, getSaleByIdModel, getSalesByDateModel};