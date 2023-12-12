const { ENDPOINT, headers, USER } = require("../../constants");
const { profilePatchPayload } = require("./fixture/profile-patch-payload");
async function updateProfile(req, res) {
  const fetch = require("node-fetch");

  const options = {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      data: profilePatchPayload,
    }),
  };

  const response = await fetch(`${ENDPOINT}/api/profiles/${USER}/`, options);
  const json = await response.json();
  res.send(json);
}

module.exports = { updateProfile };
