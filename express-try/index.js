const express = require("express");
const { port } = require("./constants");
const { getProfile } = require("./scenarios/profile/get-profile");
const { updateProfile } = require("./scenarios/profile/update-profile");
const {
  createSubscription,
} = require("./scenarios/profile-subscription/create-subscription");

const app = express();
app.set("json spaces", 2);
app.use(express.json());

app.get("/update-profile", updateProfile);
app.get("/get-profile", getProfile);

app.get("/create-subscription", createSubscription);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
