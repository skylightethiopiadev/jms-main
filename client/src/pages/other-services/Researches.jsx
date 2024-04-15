// icons
import { RiMicroscopeFill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";

const Researches = () => {
  return (
    <div>
      {/* first order container */}
      <div className="relative">
        {/* background image */}
        <div className="w-full h-[400px] overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src="https://allea.org/wp-content/uploads/2020/02/88572076-huge-1030x671.jpg"
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0 w-full h-full z-10 px-[12%] flex">
          {/* left */}
          <div className="w-[50%] self-center">
            {/* bold paragraph */}
            <div className="font-bold text-5xl">
              <p>
                Research <span>Laboratory</span> for Testing
              </p>
            </div>
            {/* normal paragraph */}
            <div className="my-3">
              <p>
                Dolor sit amet consectetur adipisicing elit. Ad maxime autem
                corrupti?
              </p>
            </div>
            {/* button */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex items-center justify-center gap-3 p-2 cursor-pointer bg-blue-700 text-white transition-all ease-in-out duration-300 hover:bg-blue-500">
                <span>More About</span>
                <div className="w-[24px] h-[3px] bg-white"></div>
              </div>
              <div className="flex items-center justify-center gap-3 p-2 cursor-pointer bg-gray-700 text-white transition-all ease-in-out duration-300 hover:bg-gray-500">
                <span>Book Appointment</span>
                <div className="w-[24px] h-[3px] bg-white"></div>
              </div>
            </div>
          </div>
          {/* right */}
          <div></div>
        </div>
      </div>
      {/* second order container */}
      <div>
        {/* content container */}
        <div className="px-[12%] py-[5%] grid grid-cols-4 gap-5">
          {[...Array(4)].map((item, index) => (
            <div key={index} className="p-5 rounded-md bg-white shadow-md">
              <div className="my-3 text-5xl text-blue-500">
                <RiMicroscopeFill />
              </div>
              <div className="font-bold my-1">
                <h3>High-End Latest Technology</h3>
              </div>
              <div>
                <p>
                  Ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
                  assumenda nihil perspiciatis!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* third order container */}
      <div>
        {/* content container */}
        <div className="px-[12%] py-[3%]">
          <div className="w-[85%] mx-auto text-center text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, voluptas maiores impedit minus ipsum, incidunt
              reiciendis earum, dolorum{" "}
              <span className="font-bold text-blue-700">voluptatem</span> cumque
              quae unde ex natus laudantium amet! Laborum, asperiores aliquam.
              Eos labore dolor rem. Fugiat esse placeat aliquid consectetur
              atque accusamus. Libero, ab!
            </p>
          </div>
          <div className="flex items-center justify-center mt-3">
            <div className="w-[15%] h-[5px] bg-blue-700 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* fourth order container */}
      <div>
        {/* content container */}
        <div className="px-[12%] py-[3%] gap-5 flex">
          {/* left */}
          <div className="w-[50%] bg-blue-300">
            <div className="w-full h-full">
              <img src="" alt="" />
            </div>
          </div>
          {/* right */}
          <div className="w-[50%]">
            {/* bold paragraph */}
            <div className="font-bold text-3xl w-[75%]">
              <p>Welcome to Labora Laboratory INC.</p>
            </div>
            {/* header */}
            <header className="my-3 font-medium">
              <h3>Having a new name is just a beginning</h3>
            </header>
            {/* normal paragraph */}
            <div className="my-3">
              <p>
                Ethiopia ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati suscipit odio debitis, laudantium, quisquam eum unde
                hic voluptas neque quam velit optio illo inventore quod!
                Consequatur nisi sint quod voluptates, delectus eos?
              </p>
            </div>
            {/* button */}
            <div>
              <button className="flex items-center gap-1 font-semibold text-blue-700 transition-all ease-in-out duration-300 hover:text-blue-600">
                <span>More About Us</span>
                <MdArrowRightAlt className="text-xl"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researches;
