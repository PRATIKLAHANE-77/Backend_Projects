const express = require("express");
const database = require("./database.js");
const app = express();

app.get("/", (req, res) => {
  const newPayment = { 
    id: 111,
    name: "ram",
    mode: "Phonepe",
    city: "Rahuri",
  };

  database
    .execute(
      "INSERT INTO project1.temp (id,name, mode, city) VALUES (?, ?, ?,?)",
      [newPayment.id, newPayment.name, newPayment.mode, newPayment.city]
    )
    .then((result) => {
      res.json(result); // Send a JSON response on success
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" }); // Handle the error gracefully
    });
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

