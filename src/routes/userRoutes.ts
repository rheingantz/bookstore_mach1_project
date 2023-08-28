import { Router } from "express";
import getUsersController from "../controllers/users/getCustomerController"
import signInController from "../controllers/users/signInController";
import logInController from "../controllers/users/loginController";
import newPasswordController from "../controllers/users/newPasswordController";
import authMiddleware from "../midwareAuthorization";

const route = Router();

route.get("/usersList", authMiddleware, getUsersController.getUsers);
route.get("/userById/:id", authMiddleware, getUsersController.getUserById);
route.post("/signIn", signInController.signIn);
route.post("/logIn", logInController.logIn);
route.put("/newPassword", newPasswordController.reserPassword);

export default route;