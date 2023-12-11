"use server";
import "server-only";

import { API_KEY, ENDPOINT, profileSample } from "@/constants";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

const url = `${ENDPOINT}/person/01HH0YT3XQ8T22HQESD3CYM85B?api_key=${API_KEY}`;

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function Page() {
  const options = { method: "PUT", headers: { accept: "application/json" } };
  console.log({ data: await getData() });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <h1>Customer Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-4 bg-gray-100 grid grid-cols-3 grid-rows-3 gap-2"
      >
        <label className="block mb-2">
          Address 1:
          <input
            type="text"
            name="$address1"
            value={formData.$address1}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Address 2:
          <input
            type="text"
            name="$address2"
            value={formData.$address2}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          City:
          <input
            type="text"
            name="$city"
            value={formData.$city}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Country:
          <input
            type="text"
            name="$country"
            value={formData.$country}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Latitude:
          <input
            type="text"
            name="$latitude"
            value={formData.$latitude}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Longitude:
          <input
            type="text"
            name="$longitude"
            value={formData.$longitude}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Region:
          <input
            type="text"
            name="$region"
            value={formData.$region}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Zip:
          <input
            type="text"
            name="$zip"
            value={formData.$zip}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="$email"
            value={formData.$email}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="$title"
            value={formData.$title}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Phone Number:
          <input
            type="tel"
            name="$phone_number"
            value={formData.$phone_number}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Organization:
          <input
            type="text"
            name="$organization"
            value={formData.$organization}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          First Name:
          <input
            type="text"
            name="$first_name"
            value={formData.$first_name}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Last Name:
          <input
            type="text"
            name="$last_name"
            value={formData.$last_name}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Timezone:
          <input
            type="text"
            name="$timezone"
            value={formData.$timezone}
            onChange={handleChange}
            className="form-input block w-full mt-1 p-1  border rounded-md"
          />
        </label>

        {/* Add more labels and inputs with similar styling for other form fields */}

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </>
  );
}
