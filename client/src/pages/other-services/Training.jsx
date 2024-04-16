import {NavLink} from 'react-router-dom'
import Chart from "react-apexcharts";
// icons
import { IoIosPlay } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { IoLogoElectron } from "react-icons/io5";

const Training = () => {
  return (
    <div className="w-full">
      {/* first order container */}
      <div className="w-full bg-white py-[3%] px-[12%]">
        {/* content container */}
        <div>
          {/* top */}
          <div className="w-full flex ">
            {/* left */}
            <div className="w-[50%]">
              {/* bold paragraph */}
              <div className="my-[7px] text-5xl leading-[64px] font-bold text-gray-700">
                <p>Improve your Skill with Different Way</p>
              </div>
              {/* normal paragraph */}
              <div className="my-[12px] text-gray-700 w-[80%]">
                <p>
                  dolor sit amet consectetur adipisicing elit. Obcaecati numquam
                  tempora cupiditate esse et enim vero error nobis deleniti,
                  accusantium quibusdam laudantium, unde voluptas, assumenda
                  quis adipisci ratione amet ducimus tempore ex.
                </p>
              </div>
              {/* button container */}
              <div className="relative w-full">
                <div className="my-[24px] flex items-center gap-[12px]">
                  <button className="px-[12px] py-1 rounded-md bg-yellow-400 text-white">
                    Get Started
                  </button>
                  <button className="flex items-center justify-center gap-1 px-[12px] py-1 border-2 border-yellow-400 rounded-md transition-all ease-in-out duration-300 hover:bg-yellow-400 hover:text-white">
                    <IoIosPlay />
                    <span>Watch Video</span>
                  </button>
                </div>
                <div className="absolute right-[-64px] top-1/2 -translate-y-1/2 bg-white shadow-md p-[12px] flex gap-3">
                  <div className="self-center text-yellow-400 text-5xl">
                    <GiGraduateCap />
                  </div>
                  <div>
                    <div className="my-1 font-bold text-lg text-gray-700">
                      <h3>Certificates</h3>
                    </div>
                    <div className="">
                      <p className="w-[200px]">
                        Consectetur adipisicing, skill improvement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-[50%]">
              {/* image container */}
              <div className="w-full">
                <img
                  className="w-full h-[350px] object-center object-cover"
                  src="https://freepngimg.com/save/166436-college-student-free-transparent-image-hd/549x384"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* bottom */}
          <div>
            <div className="w-full rounded-md bg-white shadow-md p-[24px] mt-[7px] flex ice justify-evenly">
              <div className="flex flex-col items-center justify-center">
                <div className="my-3 font-bold text-xl text-yellow-400">
                  <h3>10K+</h3>
                </div>
                <div>
                  <p>Students</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="my-3 font-bold text-xl text-yellow-400">
                  <h3>20+</h3>
                </div>
                <div>
                  <p>Quality Courses</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="my-3 font-bold text-xl text-yellow-400">
                  <h3>10+</h3>
                </div>
                <div>
                  <p>Experienced Mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div>
        {/* content container */}
        <div className="w-full bg-gray-100 py-[3%] px-[12%]">
          {/* header */}
          <header className="flex items-center justify-center font-bold text-2xl">
            <h3>Most Popular Courses</h3>
          </header>
          {/* course cards */}
          <div className="grid grid-cols-4 gap-5 mt-[24px]">
            {[...Array(4)].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow-md"
              >
                {/* image */}
                <div className="w-full h-[120px] overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKTcV42s8uRrTyhLO3xBBgEFsTFkyEV8SeesxPMRTKA&s"
                    alt=""
                  />
                </div>
                <div className="my-1 mx-3 font-bold text-gray-700">
                  <h3>Android Development from Zero to Hero</h3>
                </div>
                <div className="my-1 mx-3 flex ice gap-1">
                  <div className="flex items-center gap-1 text-xl text-yellow-400">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                  <div className="flex items-center font-semibold">
                    <span>(12)</span>
                  </div>
                </div>
                <footer className="my-3 mt-7 mx-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">64</span>
                    <span>courses</span>
                  </div>
                  <div>
                    <button className="flex items-center justify-center p-1 rounded-full bg-white text-yellow-400 text-xl transition-all ease-in-out duration-300 hover:bg-yellow-400 hover:text-white">
                      <MdArrowRightAlt />
                    </button>
                  </div>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* third order container */}
      <div>
        {/* content container */}
        <div className="w-full bg-white py-[5%] px-[12%] flex gap-5">
          {/* left */}
          <div className="w-[50%] relative">
            {/* background image */}
            <div className="w-full h-full bg-white">
              <img
                className="w-full h-full object-center object-cover"
                src="https://www.sydle.com/blog/assets/post/e-learning-615b4d7b0e94dd1b0fc8d27e/e-learning.jpg"
                alt=""
              />
            </div>
            {/* content */}
            <div className="absolute left-0 top-0 w-full h-full z-20">
              {/* top card */}
              <div className="absolute top-0 right-0 bg-white shadow-md p-5">
                <header className="font-bold text-gray-700">
                  <h3>e-learning</h3>
                </header>
                <div>
                  <span>some text</span>
                </div>
                <div>
                  <span>other text agin</span>
                </div>
                <div className="font-bold text-sm">
                  <span>12.25k+</span>
                </div>
              </div>
              {/* bottom card */}
              <div className="absolute left-[-24px] bottom-0 p-1 bg-white shadow-md">
                <header className="flex items-center justify-center font-bold">
                  <h3>header</h3>
                </header>
                {/* chart */}
                <div className="flex items-center justify-center">
                  <Chart
                    type="radialBar"
                    height={170}
                    width={170}
                    series={[75]}
                    options={{
                      colors: ["#0a4aab"],
                      plotOptions: {
                        radialBar: {
                          hollow: {
                            size: "65%"
                          },
                          dataLabels: {
                            name: {
                              show: false
                            },
                            value: {
                              fontSize: "24px",
                              fontWeight: "800",
                              color: "#dea404"
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[50%]">
            {/* bold paragraph */}
            <div className="font-bold text-2xl">
              <p>
                Make your <span className="text-yellow-400">Learning</span>{" "}
                Enjoyable
              </p>
            </div>
            {/* normal paragraph */}
            <div className="my-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident id recusandae quisquam quas. Ratione facere illo sint
                illum aliquam ipsam velit laborum perferendis ad!
              </p>
            </div>
            {/* cards */}
            <div className="grid grid-cols-2 gap-5">
              {[...Array(4)].map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-md bg-white shadow-md flex gap-3"
                >
                  <div className="text-4xl text-yellow-400">
                    <IoLogoElectron />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-yellow-400">
                      <h3>E-Learning</h3>
                    </div>
                    <div>
                      <p>Ipsum dolor sit amet consectetur adipisice</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* fourth order container */}
      <div>
        {/* content container */}
        <div className="w-full bg-white py-[5%] px-[12%] flex gap-5">
          {/* left */}
          <div className="w-[50%]">
            {/* bold paragraph */}
            <div className="font-bold text-2xl w-[65%]">
              <p>
                Testimonial What Our{" "}
                <span className="text-yellow-400">Students</span> Say
              </p>
            </div>
            {/* normal paragraph */}
            <div className="my-3">
              <h1 className="font-bold my-3">some title text</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident id recusandae quisquam quas. Ratione facere illo sint
                illum aliquam ipsam velit laborum perferendis ad!
              </p>
            </div>
            <footer className="flex items-center justify-between mt-10">
              <div className="flex gap-1">
                <div>
                  <div className="w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 font-bold">
                    <span>Haddis</span>
                    <span>Fanta</span>
                  </div>
                  <span>Software Enginner</span>
                </div>
              </div>
              <div>
                <button className="p-1 flex items-center justify-center rounded-full text-2xl border-2 border-yellow-400 text-white bg-yellow-400 transition-all ease-in-out duration-300 hover:text-yellow-400 hover:bg-white">
                  <MdArrowRightAlt />
                </button>
              </div>
            </footer>
          </div>
          {/* right */}
          <div className="w-[50%] relative">
            {/* background image */}
            <div className="w-full h-full bg-white">
              <img
                className="w-full h-full object-center object-cover"
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Why_E-Learning_Insights_into_the_World_of_Online_Learning_and_Development.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* fifth order container */}
      <div className="w-full bg-gray-100">
        {/* content container */}
        <div className="py-[5%] px-[12%]">
          <header className="my-3 font-bold text-2xl">
            <h3>Our Expert Mentors</h3>
          </header>
          {/* mentors */}
          <div className="grid grid-cols-4 gap-5">
            {[...Array(4)].map((item, index) => (
              <div key={index} className="bg-white shadow-md p-3 rounded-md">
                <div className="w-full h-[170px] overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-bold mt-3">
                    <span>Haddis</span>
                    <span>Fanta</span>
                  </div>
                  <div className="font-medium text-sm">
                    <span>Software Engineer</span>
                  </div>
                </div>
                <div className="my-2">
                  <p>Haddis ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
                <div>
                  <button className="text-gray-500 font-medium hover:text-gray-700">
                    UI/UX Designer
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* footer */}
          <footer className="flex items-center justify-between mt-10">
            <div>
              <ul className='flex items-center gap-3 text-gray-500 font-medium'>
                <li>
                  <NavLink className={'text-yellow-400 underline'}>Home</NavLink>
                </li>
                <li>
                  <NavLink>Courses</NavLink>
                </li>
                <li>
                  <NavLink>Training</NavLink>
                </li>
                <li>
                  <NavLink>Mentors</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <button className="p-1 text-2xl flex items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400 text-white transition-all ease-in-out duration-300 hover:bg-white hover:text-yellow-400">
                <MdArrowRightAlt />
              </button>
            </div>
          </footer>
        </div>
      </div>
      {/* sixth order container */}
      <div>
        {/* content container */}
        <div className='w-full px-[12%] py-[5%] flex items-center justify-center'>
          <div className='rounded-md py-[3%] px-[10%] bg-yellow-400'>
            {/* bold text */}
            <header className='flex items-center justify-center font-bold text-3xl'>
              <h3>Subscribe to Our News Letter</h3>
            </header>
            {/* normal text */}
            <div className='flex items-center justify-center'>
              <p>
                Bahir Dar, dolor sit amet consectetur adipisicing elit. Exercitationem, officia.
              </p>
            </div>
            {/* input container */}
            <div className='flex items-center justify-center gap-5 mt-5'>
              <div className='flex items-center rounded-sm bg-white px-3 py-1'>
                <input
                  className='focus:ring-0 focus:outline-none py-2 border-none bg-transparent h-[32px] w-full'
                  type="text"
                  placeholder='your email' />
              </div>
              <div>
                <button className='px-3 py-2 rounded-sm bg-blue-700 text-white'>send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
