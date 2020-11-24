import { Activities, Alerts, Items, Users } from "./dbConnectors";

export const resolvers = {
  Query: {
    getActivity: ({ id }) =>
      new Promise((resolve, reject) => {
        Activities.findById(id, (err, activity) => {
          if (err) {
            reject(err);
          } else {
            resolve(activity);
          }
        });
      }),
    getActivities: () => Activities.find(),
    getAlert: ({ id }) =>
      new Promise((resolve, reject) => {
        Alerts.findById(id, (err, alert) => {
          if (err) {
            reject(err);
          } else {
            resolve(alert);
          }
        });
      }),
    getAlerts: () => Alerts.find(),
    getItem: ({ id }) =>
      new Promise((resolve, reject) => {
        Items.findById(id, (err, item) => {
          if (err) {
            reject(err);
          } else {
            resolve(item);
          }
        });
      }),
    getItems: () => Items.find(),
    getUser: ({ id }) =>
      new Promise((resolve, reject) => {
        Users.findById(id, (err, user) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        });
      }),
    getUsers: () => Users.find(),
  },
  Mutation: {
    createActivity: (_, { input }) => {
      const newActivity = new Activities({
        name: input.name,
        date: input.date,
        description: input.description,
      });

      newActivity.id = newActivity._id;

      return new Promise((resolve, reject) => {
        newActivity.save(err => {
          if (err) {
            reject(err);
          } else {
            resolve(newActivity);
          }
        });
      });
    },
    createAlert: (_, { input }) => {
      const newAlert = new Alerts({
        name: input.name,
        date: input.date,
        description: input.description,
      });

      newAlert.id = newAlert._id;

      return new Promise((resolve, reject) => {
        newAlert.save(err => {
          if (err) {
            reject(err);
          } else {
            resolve(newAlert);
          }
        });
      });
    },
    createItem: (_, { input }) => {
      const newItem = new Items({
        name: input.name,
        date: input.date,
        amount: input.amount,
        location: input.location,
      });

      newItem.id = newItem._id;

      return new Promise((resolve, reject) => {
        newItem.save(err => {
          if (err) {
            reject(err);
          } else {
            resolve(newItem);
          }
        });
      });
    },
    createUser: (_, { input }) => {
      const newUser = new Users({
        name: input.name,
        date: input.date,
        description: input.description,
      });

      newUser.id = newUser._id;

      return new Promise((resolve, reject) => {
        newUser.save(err => {
          if (err) {
            reject(err);
          } else {
            resolve(newUser);
          }
        });
      });
    },
    updateActivity: (_, { input }) =>
      new Promise((resolve, reject) => {
        Activities.findOneAndUpdate(
          { _id: input.id },
          input,
          (err, activity) => {
            if (err) {
              reject(err);
            } else {
              resolve(activity);
            }
          }
        );
      }),
    updateAlert: (_, { input }) =>
      new Promise((resolve, reject) => {
        Alerts.findOneAndUpdate({ _id: input.id }, input, (err, alert) => {
          if (err) {
            reject(err);
          } else {
            resolve(alert);
          }
        });
      }),
    updateItem: (_, { input }) =>
      new Promise((resolve, reject) => {
        Items.findOneAndUpdate({ _id: input.id }, input, (err, items) => {
          if (err) {
            reject(err);
          } else {
            resolve(items);
          }
        });
      }),
    updateUser: (_, { input }) =>
      new Promise((resolve, reject) => {
        Users.findOneAndUpdate({ _id: input.id }, input, (err, user) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        });
      }),
    deleteActivity: (_, { id }) =>
      new Promise((resolve, reject) => {
        Activities.deleteOne({ _id: id }, err => {
          if (err) {
            reject(err);
          } else {
            resolve(`Successfully deleted activity ${id}`);
          }
        });
      }),
    deleteAlert: (_, { id }) =>
      new Promise((resolve, reject) => {
        Activities.deleteOne({ _id: id }, err => {
          if (err) {
            reject(err);
          } else {
            resolve(`Successfully deleted alert ${id}`);
          }
        });
      }),
    deleteItem: (_, { id }) =>
      new Promise((resolve, reject) => {
        Activities.deleteOne({ _id: id }, err => {
          if (err) {
            reject(err);
          } else {
            resolve(`Successfully deleted item ${id}`);
          }
        });
      }),
    deleteUser: (_, { id }) =>
      new Promise((resolve, reject) => {
        Activities.deleteOne({ _id: id }, err => {
          if (err) {
            reject(err);
          } else {
            resolve(`Successfully deleted user ${id}`);
          }
        });
      }),
  },
};
