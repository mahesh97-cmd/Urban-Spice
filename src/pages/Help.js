import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Help Center</h1>
      <p className="text-lg mb-6">
        Welcome to our Help Center! Here you can find answers to common
        questions and get assistance with any issues you may encounter.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <p className="text-gray-700">
            Have questions? Check out our frequently asked questions to find
            answers to common queries.
          </p>
          <Link to="/faq" className="text-blue-600 mt-4 inline-block">
            Learn More
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            Need further assistance? Contact our support team and we'll be
            happy to help you.
          </p>
          <Link to="/contact" className="text-blue-600 mt-4 inline-block">
            Contact Us
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Terms of Service</h2>
          <p className="text-gray-700">
            Review our terms of service to understand your rights and
            obligations when using our website.
          </p>
          <Link to="/terms" className="text-blue-600 mt-4 inline-block">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
