const { USER, ENDPOINT, headers, PUBLIC_KEY } = require("../../constants");
const {
  createSubscriptionPayload,
} = require("./fixture/subscription-create-payload");

async function createSubscription(req, res) {
  {
    const fetch = require("node-fetch");

    const options = {
      method: "POST",
      headers: { ...headers, revision: "2023-10-15" },
      body: JSON.stringify({
        data: createSubscriptionPayload(USER),
      }),
    };

    const response = await fetch(
      `${ENDPOINT}/client/subscriptions/?company_id=${PUBLIC_KEY}`,
      options
    );
    res.send({ response });
  }
}

module.exports = { createSubscription };
