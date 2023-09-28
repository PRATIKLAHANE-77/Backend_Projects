// 1 --> using normal way
// const express = require('express');
// const app = express();

// const sequelize = require('./SDatabase.js');

// sequelize.sync().then(result => {
//     // console.log(result);
//     app.listen(4000);
// }).catch(err => {
//     console.log(err);
// });

// 2 --> using sequalize method
// Import the Express framework and create an Express application instance
const express = require("express");
const app = express();

// Import the Sequelize instance and the Model (table) definition
const sequelize = require("./SDatabase.js");
const Model = require("./sequlaize.js"); // Import the model

// Synchronize the database and start the Express server
sequelize
  .sync()
  .then(() => {
    // Start the Express server and listen on port 4000
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
      

      // Insert a new record into the database using Sequelize
      Model.create({
        name: "shubham",
        mode: "gpay",
        city: "bejgaon",
      })
        .then((result) => {
          console.log("Dummy data inserted:", result);

          // Retrieve and log all records from the database using Sequelize
          Model.findAll()
            .then((models) => {
              console.log("Retrieved data:", models);
            })
            .catch((err) => {
              console.error("Error retrieving data:", err);
            });
        })
        .catch((err) => {
          console.error("Error inserting dummy data:", err);
        });
    });
  })
  .catch((err) => {
    console.log("Database synchronization error:", err);
  });

// to get specific data
app.get("/", (req, res) => {
  Model.findAll({
    where: {
      mode: "gpay",
    },
  })
    .then((models) => {
      res.json(models);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// to update the specific user info
Model.update(
  {
    name: "manoj lahane",
    mode: "phonepe",
    city: "nashik",
  },
  {
    where: {
      id: 1, // Specify the ID of the product you want to update
    },
  }
)
  .then((result) => {
    if (result[0] === 1) {
      console.log("Product updated successfully");
    } else {
      console.log("Product not found or not updated");
    }
  })
  .catch((err) => {
    console.error("Error updating product:", err);
  });

  // to delete the specific user from database
  Model.destroy({
    where: {
      id: 1, // Specify the ID of the record you want to delete
    },
  })
    .then((result) => {
      if (result === 1) {
        console.log("Record deleted successfully");
      } else {
        console.log("Record not found or not deleted");
      }
    })
    .catch((err) => {
      console.error("Error deleting record:", err);
    });
  
