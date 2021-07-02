const mongoose = require("mongoose");
const connectionURL = process.env.DB_URL;
// const connectionURL =
//   "mongodb+srv://mmuazam99:ilu>c8cs@cluster0.dgyhk.mongodb.net/Task-Manager?retryWrites=true&w=majority";

const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    const conn = await mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MONGODB connected successfully: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();
