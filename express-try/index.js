const express = require("express");
const { ENDPOINT, headers, USER, port } = require("./constants");
const { sampleUser } = require("./data");

const app = express();
app.set("json spaces", 2);
app.use(express.json());

app.get("/update-user", async (req, res) => {
  const fetch = require("node-fetch");

  const options = {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      data: sampleUser,
    }),
  };

  const response = await fetch(`${ENDPOINT}/profiles/${USER}/`, options);
  const json = await response.json();
  res.send(json);
});

app.get("/get-user", async (req, res) => {
  const fetch = require("node-fetch");

  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    `${ENDPOINT}/profiles/${USER}/?additional-fields[profile]=subscriptions,predictive_analytics`,
    options
  );
  const json = await response.json();
  res.header("Content-Type", "application/json");
  res.send(json);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
