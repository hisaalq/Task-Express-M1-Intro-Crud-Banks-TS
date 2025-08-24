export interface Account {
  id: number;
  username: string;
  funds: number;
}

export const accounts: Account[] = [
  {
    id: 1,
    username: "Omar",
    funds: 30,
  },
  {
    id: 2,
    username: "Zainab",
    funds: 0,
  },
  {
    id: 3,
    username: "Salwa",
    funds: 100,
  },
];
