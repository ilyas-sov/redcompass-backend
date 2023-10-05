const express = require("express");
const task_data = require("./task_data.json");
const cors = require("cors");

const app = express();

app.use(cors("http://localhost:3001"));

app.get("/users", (req, res) => {
  res.statusCode = 200;

  res.json(task_data.users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  const transactions = task_data.transactions.filter((transaction) => {
    return transaction.sourceId === id || transaction.targetId === id;
  });

  res.send(transactions);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
