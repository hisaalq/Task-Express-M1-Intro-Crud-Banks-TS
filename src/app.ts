import express from "express";
import { accounts, Account } from "../accounts";
import accountsRouter from "./apis/accounts/accounts.routes";
import { createAccount, deleteAccount, getAccountByUsername, updateAccount } from "./apis/accounts/accounts.controllers";

const app = express();
const PORT = 8000


app.use("/", accountsRouter);

app.post("/", createAccount);

app.delete("/:id", deleteAccount);
  
app.put("/:id", updateAccount);

//If ?currency=usd is provided in the query, convert funds to USD (assume 1 KWD = 3.25 USD)
app.get("/:username", getAccountByUsername);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});