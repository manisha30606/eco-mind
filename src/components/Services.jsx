import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, heading, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={heading} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        {link && (
          <Link to={link}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
              Learn More
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

// Define your card data
const cardData = [
  {
    id: "card1",
    image: new URL('../assets/service/carfoot.jpeg', import.meta.url).href,
    heading: 'Carbon Footprint Calculator',
    description: 'Estimates and tracks emissions, offers reduction tips, integrates with wearables.',
    link: '/eco-mind/data'
  },
  {
    id: "card2",
    image: new URL('../assets/service/sustainabilityhub.jpeg', import.meta.url).href,
    heading: 'Sustainability Hub',
    description: 'Articles, videos, infographics, expert opinions, and blog on sustainability.',
    link: '/eco-mind/data1'
  },
  {
    id: "card3",
    image: new URL('../assets/service/EcoChall.jpeg', import.meta.url).href,
    heading: 'Eco-Challenges',
    description: 'Interactive challenges with rewards and social media sharing.',
    link: '/eco-mind/data1'
  },
  {
    id: "card4",
    image: new URL('../assets/service/sustainableguid.jpg', import.meta.url).href,
    heading: 'Sustainable Living Guide',
    description: 'Tips, goal tracking, and app integration for sustainable habits.',
    link: '/eco-mind/data'
  },
  {
    id: "card5",
    image: new URL('../assets/service/communityform.jpg', import.meta.url).href,
    heading: 'Community Forum',
    description: 'Discussion board, expert Q&As, webinars, and group management.',
    link: '/eco-mind/data1'
  },
  {
    id: "card6",
    image: new URL('../assets/service/bussiness.jpeg', import.meta.url).href,
    heading: 'Business Sustainability Toolkit',
    description: 'Resources, case studies, and guides for sustainable business practices.',
    link: '/eco-mind/data'
  },
  {
    id: "card7",
    image: new URL('../assets/service/newsupdate.jpg', import.meta.url).href,
    heading: 'News and Updates',
    description: 'Latest environmental news, updates, and newsletter subscription.',
    link: '/eco-mind/data1'
  },
  {
    id: "card8",
    image: new URL('../assets/service/tree.jpg', import.meta.url).href,
    heading: 'Tree Plantation',
    description: 'Tree planting is the process of transplanting tree seedlings....',
    link: '/eco-mind/data'
  },
];

export default function Services() {
  return (
    <>
      <div id="servicesPage" className="w-full p-10 mt-0 diagonal-gradiant">
        <div className="heading mt-16 text-2xl font-bold text-blue-500">Our Services</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cardData.map((card) => (
            <Card 
              key={card.id} 
              image={card.image} 
              heading={card.heading} 
              description={card.description} 
              link={card.link} 
            />
          ))}
        </div>
      </div>
    </>
  );
}
