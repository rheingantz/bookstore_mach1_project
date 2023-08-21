import { Router } from "express";
import getUsersController from "../controllers/users/getCustomerController"
import signInController from "../controllers/users/signInController";
import logInController from "../controllers/users/loginController";
import newPasswordController from "../controllers/users/newPasswordController";

const route = Router();

route.get("/usersList", getUsersController.getUsers);
route.get("/userById/:id", getUsersController.getUserById);
route.post("/signIn", signInController.signIn);
route.post("/logIn", logInController.logIn);
route.put("/newPassword", newPasswordController.reserPassword);

export default route;