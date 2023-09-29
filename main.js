const express = require("express");
const app = express();
const sequelize = require("./SDatabase.js");
const Model = require("./sequlaize.js"); // Import the model

app.use(express.json()); // Use JSON middleware
app.use(express.urlencoded({ extended: true })); // Use URL-encoded middleware

// Function to render HTML content
function renderHTML(models) {
  let html = `
    <form action="/" method="POST">
      <h1>Booking Appointment App</h1>
      <label for='username'>Username</label>
      <input type='text' name='username'>
      <label for='number'>Mobile Number</label>
      <input type='number' name='number'>
      <label for='email'>Email Id</label>
      <input type='text' name='email'>
      <button name='button'>Submit</button>
    </form>
    <ul>`;

  models.forEach((model) => {
    html += `<li>${model.username}, ${model.number}, ${model.email}<button>Delete</button><button>Edit</button></li>`;
  });

  html += `</ul>`;
  // <script>document.getElementByName('Delete').addEventListner('click', (event) =>{ 
  //   event.preventDefault();
  //   action = "/delete", method = "DELETE"
      
  // })</script> 
  return html;
}

app.get("/", (req, res) => {
  // Fetch data from the database
  Model.findAll()
    .then((models) => {
      const html = renderHTML(models);
      res.send(html);
    })
    .catch((err) => {
      console.error("Error retrieving data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.post("/", (req, res) => {
  // Insert a new record into the database using Sequelize
  Model.create({
    username: req.body.username,
    number: req.body.number,
    email: req.body.email,
  })
    .then(() => {
      // Fetch data from the database after insertion
      return Model.findAll();
    })
    .then((models) => {
      const html = renderHTML(models);
      res.send(html);
    })
    .catch((err) => {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


// app.delete('/delete', (req,res) =>{
//   Model.destroy({
//     where: {
//       id: `(document.getElementByName('Delete').parent).id`, // Specify the ID of the record you want to delete
//     },
//   })
//     .then((result) => {
//      return Model.findAll();
//     })
//     .then((models) => {
//       const html = renderHTML(models);
//       res.send(html);
//     });
// })

// Sync the database before starting the server
sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("Database connected");
    });
  })
  .catch((err) => {
    console.log("Database synchronization error:", err);
  });
