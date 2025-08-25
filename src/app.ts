import express from "express";
import accountsRouter from "./apis/accounts/accounts.routes";

const app = express();
const PORT = 8000

app.use("/accounts", accountsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});