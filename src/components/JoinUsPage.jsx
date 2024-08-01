import React, { useState } from "react";
import TeamMember from "./TeamMember";
import { FaHeart } from "react-icons/fa";
export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    idType: "",
    idFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "idFile") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation check
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.idType ||
      !formData.idFile
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-black/80 text-white pt-16" id="JoinUsPage">
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0">
        <div className="flex-1 p-5">
          <div className="w-full">
            <h1 className="text-2xl text-green-500 text-left mb-4">
              Join the Movement towards a Greener Tomorrow
            </h1>
            <p className="text-sm text-left mb-4">
              "At EcoMind, we're driven by a shared passion for sustainable
              development and a determination to combat the pressing threat of
              global warming. If you're equally passionate about preserving the
              beauty and wonder of our natural world, we invite you to join our
              dynamic team of eco-warriors and contribute to shaping a brighter,
              more sustainable future for all."
            </p>

            <h1 className="text-2xl text-green-500 text-left mb-4">
              Why Join the EcoMind Family?
            </h1>
            <ul className="text-sm text-left mb-4">
              <li className="mb-2">
                Imagine being part of a vibrant community that celebrates
                individuality, creativity, and innovation. At EcoMind, we're
                committed to fostering a culture of collaboration, inclusivity,
                and mutual respect.
              </li>
              <li className="mb-2">
                By joining our team, you'll have the opportunity to:
                <ul className="list-disc list-inside">
                  <li className="mb-1">
                    Make a tangible difference in the lives of people and the
                    planet through our impactful projects
                  </li>
                  <li className="mb-1">
                    Unlock your full potential through our comprehensive
                    training programs, mentorship initiatives, and hands-on
                    experiences
                  </li>
                  <li className="mb-1">
                    Thrive in a flexible and supportive work environment that
                    prioritizes your well-being, work-life balance, and personal
                    growth
                  </li>
                  <li className="mb-1">
                    Be part of a dynamic team that's shaping the future of
                    sustainable development and environmental stewardship
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-green-400 text-left mb-4">
              If you have any questions or would like to learn more about our
              organization, please don't hesitate to contact us: <br />
              <span className="text-blue-500">
                +91 123-456-7890 | ecomind@gmail.com | Haldia, India
              </span>
              <br /> We look forward to hearing from you and exploring how you
              can join our team!
            </p>
          </div>
        </div>
        <div className="flex-1 p-5 sm:px-16 md:mr-8">
          <h2 className="text-2xl mb-4 text-green-500">Join Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                rows="4"
                required
              />
            </div>
            <div>
              <label htmlFor="idType" className="block text-lg">
                Select Your ID Type
              </label>
              <select
                id="idType"
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                required
              >
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="driver_license">Driver's License</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="idFile" className="block text-lg">
                Upload Your ID
              </label>
              <input
                type="file"
                id="idFile"
                name="idFile"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <TeamMember />
      <br />
      <div className="flex flex-row justify-center gap-3 text-xs">
        Made with love <FaHeart className="text-red-500" />
      </div>
      <br />
    </div>
  );
}
