const sampleUser = {
  type: "profile",
  id: "01HH0YT3XQ8T22HQESD3CYM85B",
  attributes: {
    phone_number: "+15005550006",
    external_id: "63f64a2b-c6bf-40c7-b81f-bed08162edbe",
    first_name: "Dehan X",
    last_name: "De Croos X",
    organization: "ACME CORP",
    title: "Engineer",
    image: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg",
    location: {
      address1: "89 E 42nd St",
      address2: "1st floor",
      city: "New York",
      country: "United States",
      region: "NY",
      zip: "10017",
      timezone: "America/New_York",
      ip: "127.0.0.1",
    },
    properties: { newKey: "New Value", "newKey-1": "New Value" },
  },
  meta: {
    patch_properties: {
      append: { newKey: "New Value" },
      unappend: { newKey: "New Value" },
      unset: "skus",
    },
  },
};

module.exports = { sampleUser };
