import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div id="contact" className="p-10 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      
      <div className="max-w-lg mx-auto bg-white rounded shadow-lg p-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
            <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

