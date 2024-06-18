// icons
import { RiMicroscopeFill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
import { MdOutlineNoteAlt } from "react-icons/md";
import { RiStethoscopeFill } from "react-icons/ri";
import { GoLightBulb } from "react-icons/go";

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
              <div className="my-3 text-5xl text-yellow-400">
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
              <span className="font-bold text-yellow-400">voluptatem</span>{" "}
              cumque quae unde ex natus laudantium amet! Laborum, asperiores
              aliquam. Eos labore dolor rem. Fugiat esse placeat aliquid
              consectetur atque accusamus. Libero, ab!
            </p>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="w-[18%] h-[5px] bg-yellow-400 rounded-full relative flex items-center justify-center">
              <div className="absolute w-[50px] h-[10px] rounded-full bg-inherit"></div>
            </div>
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
              <img
                className="w-full h-full object-center object-cover"
                src="https://images.unsplash.com/photo-1501290741922-b56c0d0884af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzZWFyY2h8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
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
              <button className="flex items-center gap-1 font-semibold text-yellow-400 transition-all ease-in-out duration-300 hover:text-yellow-300">
                <span>More About Us</span>
                <MdArrowRightAlt className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* fifth order container */}
      <div>
        {/* content container */}
        <div className="px-[12%] py-[1%] flex">
          {/* left top */}
          <div className="w-[50%] flex items-center justify-evenly">
            <div className="flex gap-1">
              <div>
                <MdOutlineNoteAlt className="text-3xl text-gray-700" />
              </div>
              <div>
                <div className="font-bold">
                  <h3>Research Center</h3>
                </div>
                <div>In every city</div>
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <RiStethoscopeFill className="text-3xl text-gray-700" />
              </div>
              <div>
                <div className="font-bold">
                  <h3>Research Technician</h3>
                </div>
                <div>Powerful & Skilled</div>
              </div>
            </div>
          </div>
          {/* bottom right */}
          <div className="w-[50%] flex items-center justify-evenly">
            <div className="flex gap-1">
              <div>
                <MdOutlineNoteAlt className="text-3xl text-gray-700" />
              </div>
              <div>
                <div className="font-bold">
                  <h3>Research Center</h3>
                </div>
                <div>In every city</div>
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <RiStethoscopeFill className="text-3xl text-gray-700" />
              </div>
              <div>
                <div className="font-bold">
                  <h3>Research Technician</h3>
                </div>
                <div>Powerful & Skilled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sixth order container */}
      <div>
        {/* content container */}
        <div className="px-[12%] py-[5%] flex gap-5">
          {/* left */}
          <div className="w-[50%]">
            {/* header */}
            <header className="font-bold text-2xl">
              <h3>Header Info</h3>
            </header>
            {/* sub header */}
            <header className="flex items-center justify-center font-semibold">
              <h3>sub-header Info</h3>
            </header>
            {/* bold paragraph */}
            <div className="font-semibold text-2xl my-2">
              <p>Ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            {/* normal paragraph */}
            <div className="my-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, veniam optio perspiciatis rem deleniti animi quisquam
                unde hic! Reiciendis doloremque modi tenetur corporis quas
                debitis qui. Reprehenderit dicta officia modi, mollitia officiis
                pariatur, ipsam repellendus enim doloremque dolore molestiae
                vero consequatur hic incidunt aperiam labore architecto dolores
                deserunt!
              </p>
            </div>
            {/* cards container */}
            <div className="mt-5 flex items-center gap-3">
              {[...Array(3)].map((item, index) => (
                <div
                  key={index}
                  className="w-[calc(100%/3)] flex items-center gap-1"
                >
                  <div className="w-[46px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-semibold">
                      <span>Haddis</span>
                      <span>Fanta</span>
                    </div>
                    <div>
                      <span>web dev</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="w-[50%] relative">
            {/* background image */}
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-center object-cover"
                src="https://blog.researcher.life/wp-content/uploads/2023/11/male-hands-with-pencil-magnifying-glass-1-1.jpg"
                alt=""
              />
            </div>
            {/* content container */}
            <div className="absolute left-0 top-0 w-full h-full">
              {/* top */}
              <div className="absolute top-0 right-0 bg-white p-5 shadow-md max-w-[250px]">
                <div>
                  <GoLightBulb className="text-5xl text-gray-700" />
                </div>
                <div className="font-bold my-1 text-gray-600">
                  <h3>Ethiopia The Land Of Wisdom</h3>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* seventh order container */}
      <div className="flex items-center justify-center py-[1%]">
        <div className="relative w-[200px] h-[5px] rounded-full bg-yellow-400 flex items-center justify-center">
          <div className="absolute w-[50px] h-[10px] rounded-full bg-yellow-400"></div>
        </div>
      </div>
      {/* eight order container */}
      <div>
        {/* content container */}
        <div className="w-full px-[12%] py-[5%]">
          {/* bold text */}
          <div className="font-bold text-2xl w-[75%]">
            <p>
              Bahir Dar ipsum dolor sit amet consectetur adipisicing elit. Eius
              animi excepturi nulla.
            </p>
          </div>
          {/* normal text */}
          <div className="my-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut
              tenetur minima fugiat provident hic neque at quo autem aliquam
              blanditiis, placeat distinctio vitae eos. Qui ea repellat a
              incidunt quaerat fuga recusandae labore voluptatum accusamus.
              Pariatur magni doloremque nostrum laboriosam porro!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researches;
