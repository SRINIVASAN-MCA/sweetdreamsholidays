import React from "react";

export default function Contact() {
  return (
    // <section id="contact" className="py-12 bg-white">
    //   <div className="container mx-auto px-4">

         <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
     
        
        {/* Heading */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-extrabold">Contact Us</h2>
          <p className="text-gray-600">We are here to assist you 24/7</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Contact Info */}
          <div className="p-6 shadow-lg rounded-xl bg-gray-50">
            <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>

            <p className="mb-2">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@sweetdreams.com
            </p>
            <p className="mb-2">
              <strong>Address:</strong> Chennai, Tamil Nadu
            </p>
          </div>

          {/* Contact Form */}
          <div className="p-6 shadow-lg rounded-xl bg-gray-50">
            <h4 className="text-xl font-semibold mb-4">Send Message</h4>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Your Phone"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="3"
                placeholder="Message"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
