const express = require("express");
const app = express();
app.use(express.json());

const data = [
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
  {
    name: "dara",
    age: 20,
  },
];

app.get("/", (req, res) => {
  res.json("Server running...");
});
app.get("/user", (req, res) => {
  res.json(data);
});

app.listen(4000, (error) => {
  if (!error) {
    console.log(`Server Running at port ${4000}`);
  } else {
    console.log(`Error : ${4000}`);
  }
});
