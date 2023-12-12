const fetch = require("node-fetch");
const { createEventPayload } = require("./fixtures/create-event-payload");

const { ENDPOINT, headers, USER } = require("../../constants");

async function createEvent(req, res) {
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      data: createEventPayload(USER),
    }),
  };

  const response = await fetch(`${ENDPOINT}/api/events`, options);
  res.send(response);
}

module.exports = { createEvent };
