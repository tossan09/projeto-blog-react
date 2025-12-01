require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const contentRoutes = require("./routes/contentRoutes");
const connectDB = require('./config/db');
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", contentRoutes); 

app.get('/', (req, res) => {
  res.send('API do Blog está rodando!');
}); //              TESTE 

//              PORTA SERVIDOR
app.listen(4000, function () {
  console.log("Server started on port 4000");
});


