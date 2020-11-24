import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://root:root@development.s9wrm.mongodb.net/inventory?retryWrites=true&w=majority",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
});

const alertsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
});

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  amount: {
    type: Number,
  },
  location: {
    type: String,
  },
});

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Activities = mongoose.model("activities", activitySchema);
const Alerts = mongoose.model("alerts", alertsSchema);
const Items = mongoose.model("items", itemsSchema);
const Users = mongoose.model("users", usersSchema);

export { Activities, Alerts, Items, Users };
