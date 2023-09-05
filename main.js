// const express = require("express");
// const bodyparser = require("body-parser");
// const app = express();
// app.use(bodyparser.urlencoded({ extended: false }));

// app.get("/login", (req, res) => {
//   res.send(
//     `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="post"><input type="text"id = "username" name = "title"><button type="submit">add</button></form>`
//   );
// });

// app.post("/", (req, res) => {
//   const abcd = req.body.username;
//   // const c = abcd + ': ' + req.body.massage +
//   res.send(
//     `${abcd} :${req.body.massage}<form action="/login" onsubmit =  "document.getElementById('username').value = localStorage.getItem('username')"  method="post" > <input type = "hidden" id = "username" name = "username" > <input type = "hidden" id = "full" name = "full" ><input type="text" name="massage" placeholder="massage"><button type="submit">Send</button></form>`
//   );
// });

// app.listen(4000);

// const express = require("express");
// const bodyparser = require("body-parser");
// const fs = require("fs");
// const app = express();
// app.use(bodyparser.urlencoded({ extended: false }));

// app.get("/login", (req, res) => {
//   res.send(
//     `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST"><input type="text"id = "username" name = "title"><button type="submit">add</button></form>`
//   );
// });

// app.post("/login", (req, res) => {
//   fs.appendFile(
//     "username.txt",
//     `${req.body.title} : ${req.body.massage}`,
//     (err) => {
//       console.log(err);
//     }
//   );
//  res.redirect('/msg');
//   })

//   app.get("/msg", (req,res)=>{
//     fs.readFile("username.txt", "utf-8", (err, data) => {
//       if(err) {
//         console.log(err);
//       }
//       console.log(data);
//       res.send(`${data}<form action="/msg" method="POST"><input type="text"id = "massage" name = "massage"><button type="submit">Send</button></form>`)

//   })

// })

// app.post("/msg", (req,res)=>{
//   fs.readFile("username.txt", )
// })

// app.listen(4000);

const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send(
    `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/msg" method="POST"><input type="text"id = "username" name = "title"><button type="submit">LOGIN</button></form>`
  );
});

app.post("/msg", (req, res) => {
  fs.appendFile("username.txt", `${req.body.title}:`, (err) => {
    console.log(err);
  });
  res.send(
    `<form action="/show" method="post"><input type="text"id = "massage" name = "massage"><button type="submit" id = "btn">SEND</button></form>`
  );
});

app.post("/show", (req, res) => {
  fs.appendFile("username.txt", ` ${req.body.massage},`, (err) => {
    fs.readFile("username.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.send(
        `${data}<form action="/show" method="post"><input type="text"id = "massage" name = "massage"><button type="submit" id = "btn">Send</button></form>`
      );
    });
  });


});

app.listen(4000);
