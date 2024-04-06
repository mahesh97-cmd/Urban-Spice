// AboutPage.js

import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-purple-200 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Our Food Ordering App</h1>
        <div className="bg-white shadow-md rounded-lg px-8 py-10">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to our food ordering app, where convenience meets culinary delight! Whether you're craving your favorite comfort food or looking to explore new flavors, our platform is designed to satisfy your appetite with just a few clicks. Powered by React and styled with Tailwind CSS, our app combines seamless functionality with a sleek, modern design to enhance your ordering experience.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At the heart of our app is a commitment to making food ordering effortless and enjoyable for everyone. We strive to connect hungry customers with a diverse array of restaurants, offering a wide range of cuisines to suit every taste and dietary preference. By leveraging the latest technologies, we aim to simplify the ordering process, streamline delivery logistics, and ensure prompt, reliable service.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc ml-6 text-lg text-gray-700 mb-6">
            <li>User-friendly Interface</li>
            <li>Personalized Recommendations</li>
            <li>Secure Payment Options</li>
            <li>Real-time Order Tracking</li>
            <li>Responsive Customer Support</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc ml-6 text-lg text-gray-700 mb-6">
            <li>Wide Selection</li>
            <li>Convenience</li>
            <li>Reliability</li>
            <li>Community Engagement</li>
          </ul>

          <p className="text-lg text-gray-700">
            Join the millions of satisfied customers who rely on our food ordering app for their culinary cravings. Whether you're dining solo, feeding the family, or hosting a gathering with friends, we've got you covered. Download our app now and embark on a culinary adventure with just a few taps!
          </p>
          <p className="text-lg text-gray-700 mt-4">Bon appétit!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
