class Activity {
  constructor(id, { name, date, description }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

class Alert {
  constructor(id, { name, date, description }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

class Item {
  constructor(id, { name, date, amount, location }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.location = location;
  }
}

class User {
  constructor(id, { name, date, description }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

let rootDB = {};

export const resolvers = {
  Query: {
    getActivity: ({ id }) => {
      return new Activity(id, rootDB[id]);
    },
    getActivities: () => {
      return new Activity(rootDB);
    },
    getAlert: ({ id }) => {
      return new Alert(id, rootDB[id]);
    },
    getAlerts: () => {
      return new Alert(rootDB);
    },
    getItem: ({ id }) => {
      return new Item(id, rootDB[id]);
    },
    getItems: () => {
      return new Item(rootDB);
    },
    getUser: ({ id }) => {
      return new User(id, rootDB[id]);
    },
    getUsers: () => {
      return new User(rootDB);
    },
  },
  Mutation: {
    createActivity: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDB[id] = input;
      return new Activity(id, input);
    },
    createAlert: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDB[id] = input;
      return new Alert(id, input);
    },
    createItem: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDB[id] = input;
      return new Item(id, input);
    },
    createUser: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDB[id] = input;
      return new User(id, input);
    },
  },
};
