import { Request, Response } from "express";
import Account from "../../models/Accounts";

export const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find({});
    return res.status(200).json(accounts);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get accounts" });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    const newAccount = await Account.create(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create account" });
  }
};
 
export const updateAccount = async (req: Request, res: Response) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(account);
  } catch (error) {
    return res.status(500).json({ error: "Failed to update account" });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    await Account.findByIdAndDelete(req.params.id);
    return res.status(204).json({ message: "Account deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete account" });
  }
};

export const getAccountByUsername = async (req: Request, res: Response) => {
  try {
    const account = await Account.findOne({ username: req.params.username });
    return res.status(200).json(account);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get account by username" });
  }
};
export const getAccountByVip = async (req: Request, res: Response) => {
  try {
    const account = await Account.findOne({ funds: { $gte: req.query.amount } });
    if (!account) {
      return res.status(404).json({ error: "No account found" });
    }
    if (account.funds < Number(req.query.amount)) {
      return res.status(400).json({ error: "Insufficient funds" });
    }
    return res.status(200).json(account);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get account by vip" });
  }
};
