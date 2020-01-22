const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const mongoose = require("mongoose");
const teamRoutes = express.Router();
const PORT = 5000 || process.env.PORT;

let Rescuer = require("./rescuer.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.db, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection");
});
teamRoutes.route("/druzyna").get((req, res) => {
  Rescuer.find((err, rescuers) => {
    if (err) {
      return console.log(err);
    } else {
      return res.json(rescuers);
    }
  });
});

// teamRoutes.route('/druzyna/:id').get((req, res) => {
//   let id = req.params.id;
//   Rescuer.findById(id, (err, rescuers) => {
//     res.json(rescuers)
//   })
// })

teamRoutes.route("/druzyna").post((req, res) => {
  let rescuer = new Rescuer(req.body);
  rescuer
    .save()
    .then(message => {
      res
        .status(200)
        .json({ message: "Dodanie ratownika zakończone powodzeniem" });
    })
    .catch(err => {
      res.status(400).send("Dodanie ratownika nie powiodło się.");
    });
});

app.use("/", teamRoutes);

app.listen(PORT, () => {
  console.log("Server run:" + PORT);
});
