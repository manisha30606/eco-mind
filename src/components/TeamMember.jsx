import React from "react";
import ppic from "../images/priya.png";
import npic from "../images/n.png";
import upic from "../images/ume.png";
import rpic from "../images/rajan.jpg";
import spic from "../images/san.png";
import biswapic from "../images/bpic.png";
import { RiCopyrightLine } from "react-icons/ri";

export default function TeamMember() {
  const members = [
    {
      id: 1,
      picture: ppic,
      name: "Priya Kumari",
      fb: "https://www.linkedin.com/in/priya-kumari-796b64249/",
    },
    {
      id: 2,
      picture: npic,
      name: "Nishi Kumari",
      fb: "https://www.linkedin.com/in/nishi-barnwal-032043301/",
    },
    {
      id: 3,
      picture: biswapic,
      name: "Biswarup Banerjee",
      fb: "https://www.linkedin.com/in/biswarup-banerjee-406b72241/",
    },
    {
      id: 4,
      picture: upic,
      name: "Umesh Kumar",
      fb: "https://www.linkedin.com/in/umesh-kumar-aa2286230/",
    },
    {
      id: 5,
      picture: rpic,
      name: "Rajan Kumar",
      fb: "https://www.linkedin.com/in/rajan-kumar-65541a22b/",
    },
    {
      id: 6,
      picture: spic,
      name: "Santosh Kumar",
      fb: "https://www.linkedin.com/in/santosh-kumar-a8490824a/",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-blue-500 text-center p-4 mb-4">
          Our Team Members
        </h1>
        <div className="flex flex-col m-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
              {members.map((member) => (
                <div key={member.id} className="inline-block px-3">
                  <div className="w-40 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
                    <img
                      src={member.picture}
                      alt={`${member.name}'s picture`}
                      className="w-full h-40 object-cover"
                    />
                    <p className="text-black text-center">{member.name}</p>
                    <a href={member.fb}>
                      <button className="absolute bottom-1 right-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        visit
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
