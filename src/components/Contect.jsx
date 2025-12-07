import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4" id="contect">

       
        <h2 className="text-4xl sm:text-3xl font-bold text-amber-400 text-center mb-4">
          Contact Hami MiniMarket
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Have a question, feedback, or order request? We would love to hear from you.
        </p>

       
        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-10 text-slate-900 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6 text-sm opacity-90">
              We are available to help you with your shopping, delivery, and support.
            </p>
            <ul className="space-y-4 text-sm font-semibold">
              <li>📍 Location:   Mogadishu Somalia</li>
              <li>📞 Phone: +252 61 2345678</li>
              <li>✉️ Email: support@hamimarket.com</li>
            </ul>
          </div>

          {/* Right Form Panel */}
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 space-y-5"
          >
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 
              bg-gradient-to-r from-amber-400 to-yellow-500 
              hover:from-yellow-500 hover:to-amber-400 
              text-slate-900 font-bold text-lg py-3 rounded-xl 
              transition duration-300 active:scale-95"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
