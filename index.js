const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json({ extended: true }));

// Импорт созданных роутов
const indexRoutes = require("./routes/index-routes");

// Смотрим, как сделано у других программистов и, возможно,
// переписываем подключение к БД и запуск сервера с учётом
// асинхронной функции и операторов try и catch:

app.listen(5000, (err) => {
  err ? console.log(err) : console.log("Server OK!");
});

mongoose
  // .connect("mongodb://mongodb/studiumspatium")
  .connect("mongodb://0.0.0.0:27017/studiumspatium")
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

// Для каждого отдельного роутера создаём отдельную строку app.use:
app.use("/api", indexRoutes);
