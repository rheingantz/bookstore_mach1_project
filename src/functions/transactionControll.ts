import { executeQuery } from "./queryExecution";

async function beginTransaction() {
  await executeQuery("BEGIN;", []);
}

async function commitTransaction() {
  await executeQuery("COMMIT;", []);
}

async function rollbackTransaction() {
  await executeQuery("ROLLBACK;", []);
}

export { beginTransaction, commitTransaction, rollbackTransaction };
