import { Router } from "express";
import getUsersController from "../controllers/users/getCustomerController"
import signInController from "../controllers/users/signInController";
import logInController from "../controllers/users/loginController";

const route = Router();

route.get("/usersList", getUsersController.getUsers);
route.get("/userById/:id", getUsersController.getUserById);
route.post("/signIn", signInController.signIn);
route.post("/logIn", logInController.logIn);

export default route;