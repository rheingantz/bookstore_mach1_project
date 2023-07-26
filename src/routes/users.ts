import { Router, Request, Response } from "express";
import { getUsers, getUserById } from "../functions/getUsers";

const route = Router();

route.get("/usersList/", async (req, res) => {
  const atendentes = await getUsers();
  res.status(200).json(atendentes);
});

route.get("/user/:id", async (req, res) => {
  const currentId = Number(req.params.id);
  const atendente = await getUserById(currentId);
  res.status(200).json(atendente);
});

export default route;
