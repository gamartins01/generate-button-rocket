import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserControler";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middewares/ensureAdmin";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();


router.post("/sessions", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin , createTagController.handle);

export { router }