const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://mhcb:hZAsrSLns54A1f0F@cluster0.qmeiuyg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

startServer();
