import { Router, Request, Response } from "express";
import { getUsers, getUserById } from "../functions/getUsers";
import { pool } from "../functions/queryExecution";

const route = Router();

route.get("/usersList/", async (req, res) => {
  try {
    const users = await getUsers();

    if (users.length === 0) {
      return res.status(404).json({ error: "There are no registered users" });
    }

    return res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users", err);
    return res.status(500).json({ error: "Error fetching users" });
  }
});

route.get("/user/:id", async (req, res) => {
  try {
    const currentId = Number(req.params.id);
    const user = await getUserById(currentId);

    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user", err);
    return res.status(500).json({ error: "Error fetching user" });
  }
});

export default route;
