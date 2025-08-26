import { Router } from "express";
import { createAccount, deleteAccount, getAccountByVip, getAccountByUsername, getAccounts, updateAccount } from "./accounts.controllers";

const accountsRouter = Router();

accountsRouter.get("/", getAccounts);
accountsRouter.post("/", createAccount);
accountsRouter.delete("/:id", deleteAccount);
accountsRouter.put("/:id", updateAccount);
accountsRouter.get("/:username", getAccountByUsername);
accountsRouter.get("/:vip", getAccountByVip);

export default accountsRouter;