import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 px-6 py-10 mb-[6rem]">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold">[Your Brand Name]</span>! We are an e-commerce platform dedicated to providing the best quality products for our customers. Our mission is to make shopping easy and accessible for everyone.
        </p>
        <p className="text-gray-700 mb-4">
          Founded in [Year] by [Founder's Name], we started with a simple goal: to offer a wide range of products at competitive prices. Our team works tirelessly to curate the latest trends and bring you the best deals on the market.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Our Values</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>🛒 Customer Satisfaction: We prioritize our customers' needs and feedback.</li>
          <li>🌍 Sustainability: We are committed to environmentally friendly practices.</li>
          <li>🤝 Integrity: We believe in honest and transparent business practices.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
        <p className="text-gray-700 mb-4">
          At [Your Brand Name], we believe in quality over quantity. Our team carefully selects each product to ensure that you receive nothing but the best. Plus, our user-friendly website and secure checkout process make your shopping experience seamless and enjoyable.
        </p>
        <p className="text-gray-700 mb-4">
          Join our community of satisfied customers and experience the difference for yourself! Follow us on social media to stay updated on our latest offers and products.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          We love hearing from you! If you have any questions or feedback, feel free to reach out to us at <a href="https://clevercoderjoy.bio.link" target='_blank' className="text-blue-500 underline">clevercoderjoy</a> or follow us on our social media channels.
        </p>
      </div>
    </div>
  );
}

export default About;
