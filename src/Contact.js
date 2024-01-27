import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [submitCount, setSubmitCount] = useState(0);
  const maxSubmissions = 3; // Set your desired limit here



  const sendEmail = (e) => {
    e.preventDefault();

    // Increase the submission count
    setSubmitCount(submitCount + 1);

    // Send the email
    emailjs.sendForm('service_ewpgn2d', 'template_erdpxwn', form.current, '6etGLh03lD8vG7Iu2')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div id="contact" className="p-10">
       <h1 className="text-4xl font-bold mb-4 text-white text-center">Contact Me</h1>
      <div className="max-w-lg mx-auto bg-gray-100 rounded shadow-lg p-8 mb-4">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">Name</label>
            <input type="text" name="user_name" id="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_phone">Phone</label>
            <input type="tel" name="user_phone" id="user_phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_message">Message</label>
            <textarea name="user_message" id="user_message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={submitCount >= maxSubmissions}>Send</button>
        </form>
        {submitCount >= maxSubmissions && <p className="text-red-500 mt-2">You have reached the maximum submission limit.</p>}
      </div>
      <h1 className="text-4xl font-bold mb-4 text-white text-center">Schedule A Call With Me</h1>
      {/* Calendly Embed */}
      <div className="max-w-lg mx-auto">
        <iframe src="https://calendly.com/brandonmcmaster/30-minute-phone-call" width="100%" height="580" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default Contact;
