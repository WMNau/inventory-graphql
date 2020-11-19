import express from "express";
import { graphqlHTTP } from "express-graphql";
import { resolvers } from "./data/resolvers";
import { schema } from "./data/schema";

require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.json({ success: true });
});

const port = process.env.PORT || process.env.DEV_PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
