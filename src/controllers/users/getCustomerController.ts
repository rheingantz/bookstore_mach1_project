import { Router, Request, Response } from "express";
import { getUsers, getUserById } from "../../functions/customerFunctions/getUsersModels";

class getCustomerController{

async getUsers(req: Request, res:Response) {
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
};

async getUserById(req:Request, res:Response) {
  try {
    const currentId = Number(req.params.id);
    const user = await getUserById(currentId);

    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    
    return res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user", err);
    return res.status(500).json({ error: "Error fetching user" });
  }
};

};

export default new getCustomerController;
