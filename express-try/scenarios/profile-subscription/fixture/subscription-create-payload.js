const createSubscriptionPayload = (userId) => ({
  type: "subscription",
  attributes: {
    custom_source: "Homepage footer signup form",
    profile: {
      data: {
        type: "profile",
        id: userId,
        attributes: {
          email: "dehandecroos@gmail.com",
          phone_number: "+15005550006",
          external_id: "63f64a2b-c6bf-40c7-b81f-bed08162edbe",
          anonymous_id: null,
          first_name: "Dehan X",
          last_name: "De Croos X",
          organization: "ACME CORP",
          title: "Engineer",
          properties: { newKey: "New Value" },
          meta: {
            patch_properties: {
              append: { newKey: "New Value" },
              unappend: { newKey: "New Value" },
              unset: "skus",
            },
          },
        },
      },
    },
  },
  relationships: { list: { data: { type: "list", id: "RJKzm3" } } },
});

module.exports = { createSubscriptionPayload };
