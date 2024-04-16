// icons
import { MdCastForEducation } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";
const Consulting = () => {
  return (
    <div>
      {/* first order container */}
      <div className="w-full h-[350px] relative">
        {/* background image */}
        <div className="w-full h-full bg-white">
          <img
            className="w-full h-full opacity-25 object-center object-cover"
            src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_11_Root-Node-6.jpg"
            alt=""
          />
        </div>
        {/* content container */}
        <div className="absolute left-0 top-0 w-full h-full px-[12%] py-[3%] flex">
          {/* left */}
          <div className="self-center w-[50%]">
            {/* bold paragraph */}
            <div className="font-bold my-3 text-5xl">
              <p>We works with focus and innovative</p>
            </div>
            {/* normal paragraph */}
            <div className="my-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias iusto assumenda eum.
              </p>
            </div>
            {/* button */}
            <div>
              <button className="my-5 px-5 py-2 rounded-md bg-yellow-400 text-white transition-all ease-in-out duration-300 hover:bg-yellow-300">
                More Results
              </button>
            </div>
          </div>
          {/* right */}
          <div className="w-[50%]"></div>
        </div>
      </div>
      {/* second order container */}
      <div>
        {/* content container */}
        <div className="w-full px-[12%] py-[3%]">
          {/* header */}
          <div className="flex items-center justify-center">
            <p className="w-[65%] text-center font-semibold text-lg">
              Haddis psum dolor sit amet consectetur adipisicing elit. Iusto
              eius rem mollitia fuga molestias nostrum quos.
            </p>
          </div>
          {/* cards container */}
          <div className="grid grid-cols-4 gap-10 my-10">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="p-5 rounded-sm bg-white shadow-md">
                <div>
                  <MdCastForEducation className="text-3xl text-yellow-400" />
                </div>
                <div className="my-3">
                  <p>Ethiopia ipsum dolor sit consectetur adipisicing.</p>
                </div>
                <div>
                  <button
                    className="px-3 py-1 border-2 border-yellow-400 rounded-sm text-yellow-400 flex ice 
                justify-center gap-1 transition-all ease-in-out duration-300 hover:bg-yellow-400 hover:text-white"
                  >
                    <span>view all</span>
                    <MdArrowRightAlt className="text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* footer */}
          <div className="flex items-center justify-center">
            <p className="w-[65%] text-center font-semibold text-lg text-gray-700">
              Ethiopia psum dolor sit amet consectetur adipisicing elit. Iusto
              eius rem mollitia fuga molestias nostrum quos.
            </p>
          </div>
        </div>
      </div>
      {/* third order container */}
      <div>
        {/* content container */}
        <div className="w-full px-[12%] py-[3%] flex gap-5">
          {/* left */}
          <div className="w-[50%]">
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-center object-cover"
                src="https://hbr.org/resources/images/article_assets/2020/07/AAug20_07_KlaweRzeczy_Consulting2.jpg"
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div className="w-[50%]">
            {/* header */}
            <header className="font-bold text-3xl">
              <p>Makuta dolor sit amet consectetur adipisicing.</p>
            </header>
            {/* normal paragraph */}
            <div className="my-3">
              <p>
                Consectetur adipisicing elit. Qui consequuntur ipsa sapiente non
                voluptatibus, facere nemo maxime? Illum possimus officia impedit
                minima sapiente tempore pariatur, ab consequuntur. Placeat
                doloribus ex corporis distinctio, deserunt voluptas natus
                maiores eveniet? Ducimus.
              </p>
            </div>
            {/* text */}
            <header className="my-3 mb-7 font-bold">
              <h3>With expert consultants</h3>
            </header>
            {/* avatar */}
            <div className="relative flex items-center">
              <div className="absolute left-0 z-0 w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  className="w-full h-full object-center object-cover"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                  alt=""
                />
              </div>
              <div className="absolute left-5 z-10 w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  className="w-full h-full object-center object-cover"
                  src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                  alt=""
                />
              </div>
              <div className="absolute left-10 z-20 w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  className="w-full h-full object-center object-cover"
                  src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg"
                  alt=""
                />
              </div>
              <div className="absolute left-14 z-30 w-[34px] aspect-square rounded-full overflow-hidden bg-gray-100 flex items-center justify-center font-bold">
                <span>21+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fourth order container */}
      <div className="flex items-center justify-center py-3">
        <div className="relative w-[200px] h-[5px] rounded-full bg-yellow-400 flex items-center justify-center">
          <div className="absolute w-[50px] h-[10px] rounded-full bg-inherit"></div>
        </div>
      </div>
      {/* fifth order container */}
      <div>
        {/* content container */}
        <div className="w-full px-[12%] py-[3%]">
          {/* bold text */}
          <div className="font-bold text-2xl w-[75%]">
            <p>
              Ethiopia ipsum dolor sit amet consectetur, adipisicing elit. Eos
              fugiat reprehenderit repellendus?
            </p>
          </div>
          {/* normal text */}
          <div className="my-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, ut ad aliquam sed eius nihil ratione quod expedita
              alias magnam in sunt eos quam. Sunt repudiandae similique facere
              repellendus optio non ducimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
