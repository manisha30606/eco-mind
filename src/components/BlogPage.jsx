import bpic from "../images/boyImage.jpg";
import upic from "../images/ume.png";
import npic from "../images/n.png";
import ppic from "../images/priya.png";
import { AddBlog } from "./AddBlog";
import biswapic from "../images/bpic.png";
import { FaHeart } from "react-icons/fa";
import { useState, useRef } from "react";
const data = [
  {
    id: 1,
    imgLink: biswapic,
    Name: "Biswarup Banerjee",
    profileLink: "#",
    Event: "Global Warming Awareness",
    eventPic:
      "https://www.classy.org/wp-content/uploads/2023/03/blog_climate-change-organizations-to-follow-in-2023-1224x612.jpg",
    desc: `Global warming is a pressing issue, with the average temperature rising by 1.5°C over the last few years. It's essential to take immediate action to prevent further damage and create a better tomorrow for future generations. Human activities like deforestation, pollution, and greenhouse gas emissions are the main causes of global warming. Understanding these causes is crucial to finding effective solutions and creating a better tomorrow.`,
    dates: "22/07/2024",
    liked: false,
  },
  {
    id: 2,
    imgLink: upic,
    Name: "Umesh Kumar",
    profileLink: "#",
    Event: "Awarness : The Devastating Effects of Global Warming",
    eventPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9SXhPrG12EgGuNYVp6ptwW_p72RNfafeWg&s",
    desc: `Global warming has severe consequences, including rising sea levels, melting glaciers, and extreme weather events. It's essential to acknowledge these effects and work towards mitigating them to create a better tomorrow.`,
    dates: "21/07/2024",
    liked: false,
  },
  {
    id: 3,
    imgLink: npic,
    Name: " Nishi Kumari",
    profileLink: "#",
    Event: "Impact on Biodiversity",
    eventPic:
      "https://cdn.britannica.com/39/196539-050-08B1091D/Riverside-deforestation-Australia.jpg",
    desc: `Global warming has a significant impact on biodiversity, leading to habitat loss, species migration, and extinction. As temperatures rise, many plants and animals are unable to adapt quickly enough to the changing climate, resulting in a loss of biodiversity. This disruption of ecosystems affects not only wildlife but also human life, as we depend on these ecosystems for food, water, and air quality. Preserving biodiversity is essential for maintaining a balanced environment and ensuring the well-being of all living organisms on Earth.`,
    dates: "25/07/2024",
    liked: false,
  },
  {
    id: 4,
    imgLink: ppic,
    Name: "Priya Roy",
    profileLink: "#",
    Event: "Awarness : Global Warming by Air Pollution",
    eventPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUGH-vCURxPbzoTsfzCqX3vHLoAZAB61gpg&s",
    desc: `Air pollution is a significant contributor to global warming. The main pollutants responsible for global warming are : Carbon dioxide , Methane ,Nitrous oxide,Ozone. These pollutants trap heat in the atmosphere, leading to global warming. The effects of air pollution on global warming are:Temperature increase,Extreme weather events,Sea-level rise.`,
    dates: "20/07/2024",
    liked: false,
  },
  {
    id: 5,
    imgLink: bpic,
    Name: "TATA & BCCI",
    profileLink: "#",
    Event: "TATA IPL '24: Every Dot Ball will planted a tree",
    eventPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4FNbK_l9t1VJnLRdsT0ktq9V9kI033Kdmw&s",
    desc: `The Tata tree plantation initiative in IPL 2024 is a wonderful initiative. As per the information, for every dot ball bowled in IPL 2024, the BCCI (Board of Control for Cricket in India) has pledged to plant 500 trees. This initiative aims to promote environmental sustainability and reduce the carbon footprint of the tournament.

    In IPL 2023, the BCCI had planted 500 trees per dot ball, and it's great to see them continuing this initiative in IPL 2024. This effort will not only help in reducing the environmental impact of the tournament but also contribute to a greener and healthier environment for future generations.
    
    Let's hope this initiative inspires more organizations and individuals to take similar steps towards environmental sustainability!`,
    dates: "25/05/2024",
    liked: false,
  },
];
export default function BlogPage() {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [blogs, setBlogs] = useState(data);
  const [likedBlogs, setLikedBlogs] = useState({});
  const imgLinkRef = useRef(null);
  const nameRef = useRef(null);
  const profileLinkRef = useRef(null);
  const eventRef = useRef(null);
  const eventPicRef = useRef(null);
  const descRef = useRef(null);
  const datesRef = useRef(null);
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      imgLink: imgLinkRef.current.value,
      Name: nameRef.current.value,
      profileLink: profileLinkRef.current.value,
      Event: eventRef.current.value,
      eventPic: eventPicRef.current.value,
      desc: descRef.current.value,
      dates: datesRef.current.value,
      liked: false,
    };
    setBlogs([...blogs, newBlog]);
    setShowAddBlog(false);
  };

  //
  const handleLikeClick = (id) => {
    setLikedBlogs((prevLikedBlogs) => ({
      ...prevLikedBlogs,
      [id]: !prevLikedBlogs[id],
    }));
  };
  const TriggeredAddblog = (e) => {
    setShowAddBlog(showAddBlog ? false : true);
  };

  return (
    <>
      <div className="diagonal-gradiant-rev p-8" id="blogPage">
        <h1 className="mt-16 text-2xl font-bold text-blue-500">Activities</h1>
        <br />
        <br />
        {!showAddBlog && (
          <p
            className="text-blue-700 text-xl absolute right-10 cursor-pointer"
            onClick={TriggeredAddblog}
          >
            <span className="text-2xl">+</span>Add
          </p>
        )}
        {showAddBlog && (
          <p
            className="text-red-700 text-xl absolute right-10 cursor-pointer"
            onClick={TriggeredAddblog}
          >
            cancel
          </p>
        )}

        <br />
        <br />
        {showAddBlog && (
          <AddBlog
            imgLinkRef={imgLinkRef}
            nameRef={nameRef}
            profileLinkRef={profileLinkRef}
            eventRef={eventRef}
            eventPicRef={eventPicRef}
            descRef={descRef}
            datesRef={datesRef}
            handleSubmit={handleSubmit}
          />
        )}
        {blogs.map((element) => {
          return (
            <ol key={element.id} class="relative border-s border-green-500 ">
              <li class="ps-6 mb-5">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-green-500 dark:bg-blue-200">
                  <img class="rounded-full shadow-lg" src={element.imgLink} />
                </span>
                <div class="items-center justify-between p-4 bg-green-100/50 border border-green-900 rounded-lg shadow-sm sm:flex  dark:border-green-600">
                  <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last">
                    {element.dates}
                    <br />
                  </time>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                    <a
                      href={element.profileLink}
                      class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {element.Name}
                    </a>
                    <br />
                    <br />
                    <div className="flex flex-col sm:flex-row gap-5">
                      <img
                        src={element.eventPic}
                        className="w-full sm:h-40 sm:w-40 rounded"
                      />
                      <h1 className="text-lg font-semibold text-green-600">
                        {element.Event}
                        <br />
                        <p className="text-sm text-black">{element.desc}</p>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" absolute buttom-0 right-2">
                  <FaHeart
                    className="text-2xl"
                    style={{
                      color: likedBlogs[element.id] ? "red" : "gray",
                    }}
                    onClick={() => handleLikeClick(element.id)}
                  />
                </div>
              </li>
              <br />
            </ol>
          );
        })}
      </div>
    </>
  );
}
