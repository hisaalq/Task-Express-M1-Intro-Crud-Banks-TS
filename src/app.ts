import express from "express";
import { accounts, Account } from "../accounts";

const app = express();
const PORT = 8000


app.get("/accounts", (req, res) => {
  res.json(accounts);
});

app.post("/accounts", (req, res) => {
  const newAccount: Account = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: 0,
  }
  accounts.push(newAccount);
  res.sendStatus(201).json(newAccount);
});

app.delete("/accounts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const account = accounts.find((account) => account.id === id);
  if (!account) {
    res.sendStatus(404);
  }
  accounts.splice(id, 1);
  res.sendStatus(204).json(account);
});

app.put("/accounts/:id", (req, res) => {
 const id = parseInt(req.params.id);
 const account = accounts.find((account) => account.id === id);
 if (!account) {
  res.sendStatus(404);
 }
 if (req.body.funds) {
  account!.funds = req.body.funds;
 } else {
  account!.funds = account!.funds + req.body.funds;
 }
 res.sendStatus(200).json(account);
});

//If ?currency=usd is provided in the query, convert funds to USD (assume 1 KWD = 3.25 USD)
app.get("/accounts/:username", (req, res) => {
const account = accounts.find((account) => account.username === req.params.username);
if (!account) {
  return res.status(404).json({ 
      error: `Account ${req.params.username} not found`,
      success: false,
   });
}
const currency = req.query.currency;
if (currency === "usd") {
  account!.funds = account!.funds * 3.25;
  return res.sendStatus(200).json(account);
}
  return res.sendStatus(200).json(account);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});