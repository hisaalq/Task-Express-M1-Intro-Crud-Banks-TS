import { Account, accounts } from "../../../accounts";
import { Request, Response } from "express";

export const getAccounts = (req: Request, res: Response) => {
   return res.json(accounts);
  };

export const createAccount = (req: Request, res: Response) => {
    const newAccount: Account = {
      id: accounts[accounts.length - 1].id + 1,
      username: req.body.username,
      funds: 0,
    }
    accounts.push(newAccount);
    return res.sendStatus(201).json(newAccount);
  }
 
export const deleteAccount = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const account = accounts.find((account) => account.id === id);
    if (!account) {
      res.sendStatus(404);
    }
    accounts.splice(id, 1);
    res.sendStatus(204).json(account);
  }

export const updateAccount = (req: Request, res: Response) => {
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
   }

   export const getAccountByUsername = (req: Request, res: Response) => {
    const username = req.params.username;
    const account = accounts.find((account) => (username === account.username));
    if (!account) {
      return res.status(404).json({ 
          error: `Account ${req.params.username} not found`,
          success: false,
       });
   }
   return res.sendStatus(200).json(account);
}
