require("dotenv").config();

const ENDPOINT = "https://a.klaviyo.com";
const API_KEY = "pk_1a77b1585e1d81ebacca13529429bafc7c";
const PUBLIC_KEY = "Ym7w33";
const port = 3000;
const USER = "01HH0YT3XQ8T22HQESD3CYM85B";
const USER2 = "01HHDQJVHRMWAF93S0PGTJDCBY";
const profileSample = {
  $address1: "",
  $address2: "",
  $city: "Mount Vernon",
  $country: "United States",
  $latitude: "",
  $longitude: "",
  $region: "Virginia",
  $zip: "22121",
  $email: "george.washington@klaviyo.com",
  $title: "President",
  $phone_number: "+13239169023",
  $organization: "U.S. Government",
  $first_name: "George",
  $last_name: "Washington",
  $timezone: "US/Eastern",
  $id: "CUSTOM_ID",
  created: "2021-11-04 09:06:13",
  updated: "2021-11-23 11:21:03",
};
const headers = {
  accept: "application/json",
  revision: "2023-10-15",
  "content-type": "application/json",
  Authorization: `Klaviyo-API-Key ${process.env.API_KEY}`,
};

module.exports = {
  ENDPOINT,
  API_KEY,
  PUBLIC_KEY,
  profileSample,
  headers,
  port,
  USER,
  USER2,
};
