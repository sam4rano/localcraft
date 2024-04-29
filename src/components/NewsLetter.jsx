import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the email subscription logic here
    console.log('Subscribing with email:', email);
  };

  return (
    <section className="bg-purple-800 relative text-white py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-3">Subscribe Newsletter</h2>
          <p className="mb-6">
            Subscribe to our news letter for the latest news craft work update straight to your inbox
          </p>
          <form onSubmit={handleSubmit} className="flex w-full md:max-w-sm">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-800 rounded shadow py-3 px-6"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="md:w-1/2 flex justify-end">
          {/* Replace these image paths with the paths to your actual images */}
          <img src="/path-to-your-first-image.jpg" alt="Craft 1" className="w-24 h-24 bg-cover bg-center rounded-lg shadow-lg mx-2" />
          <img src="/path-to-your-second-image.jpg" alt="Craft 2" className="w-24 h-24 bg-cover bg-center rounded-lg shadow-lg mx-2" />
        </div>
      </div>
      {/* Add any shapes or patterns here as additional elements or background images */}
    </section>
  );
};

export default Newsletter;
