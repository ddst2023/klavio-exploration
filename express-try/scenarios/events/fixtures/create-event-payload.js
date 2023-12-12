const createEventPayload = (userId) => ({
  type: "event",
  attributes: {
    properties: { newKey: "New Value" },
    time: "2023-12-11T11:00:00",
    value: 9.99,
    metric: {
      data: {
        type: "metric",
        attributes: { name: "Product Purchased" },
      },
    },
    profile: {
      data: {
        type: "profile",
        id: userId,
        attributes: {
          properties: { newKey: "Antique Bed Purchased" },
        },
      },
    },
  },
});

module.exports = { createEventPayload };
