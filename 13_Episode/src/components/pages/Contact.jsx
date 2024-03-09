import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">Contact us</h1>

      <form
        action=""
        className="flex flex-col w-3/5 justify-center m-auto mt-3"
      >
        <label htmlFor="name">Name: </label>
        <input
          className="p-4 border-2 border-sky-400 rounded-md"
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="message" className="mt-2">
          message:
        </label>
        <input
          className=" p-4 border-2 border-sky-400 rounded-md"
          type="text"
          name="message"
          id="message"
          placeholder="Type your message here..."
        />

        <button
          type="submit"
          className="bg-sky-500 text-white hover:bg-sky-600 p-4 mt-8 rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
