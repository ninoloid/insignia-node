import { Router } from "express";
import { asyncHandler } from "../common/utils/asyncHandler.common";
import { UserService } from "../domain/user/services/UserService";
import { GetUserController } from "../domain/user/controllers/GetUserController";
import { PutUserController } from "../domain/user/controllers/PutUserController";
import { GetUsersController } from "../domain/user/controllers/GetUsersController";
import { DeleteUserController } from "../domain/user/controllers/DeleteUserController";
import { putUserValidation } from "../domain/user/validators/putUser.validator";
import { validationErrorsHandler } from "../common/utils/validator.util";

const router = Router();

const userService = new UserService();

const getUsersController = new GetUsersController(userService);
const getUserController = new GetUserController(userService);
const putUserController = new PutUserController(userService);
const deleteUserController = new DeleteUserController(userService);

router.get("/", asyncHandler(getUsersController.handle));

router.get("/:id", asyncHandler(getUserController.handle));

router.put(
  "/:id",
  [...putUserValidation, validationErrorsHandler],
  asyncHandler(putUserController.handle)
);

router.delete("/:id", asyncHandler(deleteUserController.handle));

export default router;
