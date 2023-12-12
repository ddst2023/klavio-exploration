const { USER, ENDPOINT, headers, USER2 } = require("../../constants");

async function getProfile(req, res) {
  {
    const fetch = require("node-fetch");

    const options = {
      method: "GET",
      headers,
    };

    const response = await fetch(
      `${ENDPOINT}/api/profiles/${USER2}/?additional-fields[profile]=subscriptions,predictive_analytics`,
      options
    );
    const json = await response.json();
    res.header("Content-Type", "application/json");
    res.send(json);
  }
}

module.exports = { getProfile };
