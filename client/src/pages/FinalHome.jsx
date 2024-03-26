// icons
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

// components
import Header from "../components/Header";
import FinalHeader from "../components/FinalHeader";
// main
const FinalHome = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto pt-[12vh] font-workSans relative">
      {/* <Header /> */}
      <FinalHeader />
      {/* first order container */}
      <div className="w-full bg-gradient-to-r from-gray-50 to-orange-100 md:px-[3.75%] pb-[4.75%] pt-[1%] flex items-end justify-between gap-1 relative z-0">
        <div className="w-[50%] pl-[5%]">
          <div>
            <button className="px-[7%] py-[.1rem] rounded-full bg-sky-50 border border-sky-100">
              some text
            </button>
          </div>
          <div className="my-3 text-3xl font-semibold w-[80%] text-gray-700">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. here
            </p>
          </div>
          <div className="w-[95%]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              animi reprehenderit, sed impedit accusantium aut incidunt
              reiciendis, quia officia ad deserunt temporibus velit officiis.
            </p>
          </div>
          <div className="my-3">
            <button className="px-[24px] py-1 rounded-full bg-blue-800 text-white">
              some text{" "}
            </button>
          </div>
          <div className="flex items-center gap-[10%] w-[85%] mt-[3%]">
            <div className=" flex items-center gap-2">
              <div>
                <div className="w-[28px] aspect-square overflow-hidden">
                  <img
                    className="h-full object-cover"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gray-700 text-sm font-bold">
                  <span>4.5</span>
                  <div className="flex items-center text-lg text-yellow-300">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                </div>
                <div>
                  <span>some text over here</span>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <div className="w-[28px] aspect-square overflow-hidden">
                  <img
                    className="h-full object-cover"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAe7X///8AcbDi6/MAd7N9rM4Ac7G70eStyN/I2ukAebQAdbI5j79Unsjo8vjM4u7Y6fIfiLy00uWew9sHfrZvqs52qc3T5O+ly+FvpMpopcuMudcUg7qny+Hg7/ZDlMKAtNTw9/u92eljoMiTuNWBttWUwNukw9s5k8K61+jZwmoZAAAEoUlEQVR4nO2dbVvbIBSGgTJUSGjStNtsrX1x69b//weXtNMaDVR30YOePfcXP5RcF7e8JhxAyEeqpqynggV12VRPXuLv30mhnM6ds2Rop4pJz9CXxubOVWKsKf3JcCz4FN8JLcaPhmPFrQCPWDU+GnrBU7BVFP5gWHKsokd02RlOTO58XBA1aQ0LrnW0wxZSVCp3Li6KqkTjcmfiorhGMO5nOnQp6tx5uDC1YDLZBgAAAAAAAAAAAAAAAADAf43VRrUYx3SJ1Ro9b8YjX00WhWK4BmnN3fIprkrez/gFHLmd7FGteMU72GO0UY81p3gAa6tXgqwUrXtdgh1zNhEBZjEoKDd3XLqb6bCgZBNdZb6HDCWPQrR2EzRsWBSifggKSs+iO3051verae7cpUBtI4Ylh4aoRhHDrxyGxKjhFw6G5lvEkMW0xiwjhizijd06Yqg5GNoiLLhlMeILNfTqxKgZtpOaeUiQx5RGRAqRSRG2hRhoiXserbDDDdbTikM/+oiZDQhOORkKU25eVlFuG+DctPem7+d82uATRuzuj3qb7Vxx6UX7OHW3ur19KDRTvwNaa2uZNUAAwEfgsLQdoN+pukjKF6vG1radlnPmiOs6MEKlPub6JszDc0X3I5JycVK01hlRr+Y/d8ur9perSbOYlYU1uc7pePu3NnMVSXn9OAlqTcrd2L9K4G8WqzzxAWkNtSqWm2Aiv5tmCBBIaWhNMbzYemJfk894Uxrq5oxfR0N98EpCQ32uAI/4grY5JjO0JvzR7gUz0pqazNBMIj+/YEGpmMpQlW8XlPInoWIywzfX0QMlXVtMZbh6l6CUNdnAmMjw1zta4YExWZBnKsPNOw3lmqqeJjKMRQMMs6F63Uhk+A/siPrTfIYbovXXfIZyTTNBzWhY0VTTjIZyRVKIOQ1p+pqchhXJkJjTkGbqltVwRtEQsxpOKKppVkOS8SKrIUlYWV7D3wQNMa8hxStUckO/XTZNs9zfvyXxkqAhpjWs1nW3R7NbdVJ3X89/P90ShM6lNPRz87zrcKo8V5AUwYEJDV8flK71uc83n6qWDh6UrmJB1pJkR0cyQz8YCGfPfEcliCRPZjgb7vhjUdaSZM9KKsP7UIsy0c9wBHtWUhkuQmO3ji5oEAz5qQzDr3rTzb/8Yz6c4SY8sKnYrpzdpzEchwe2yCZVKb9/GsPInmEX2El97rkPZngdMfwSeY5gQ8DlDXXMkGDqndlwzN7wG/taSnDhSGbDEQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMKwj7kZBfG3z7druV/hlKMf4V129taHn7sh2CYbO0e4vx8tdo5wbBuhjTzH8Px+AAAAAAAAAAAAAAAAAAAAAAAA4ESdOwMXphYl46vfRXcqsWiy3LlLhmsEwVGLOVGVoDjlPB+2kILiZN58mH1rKBn3Nd3p562hF1zrqRX+YDh8DQMDrOouPekMB67S4IAWh1tdDobSl+yK0ZrSy5OhlJNCOT4FqZ0q9n/NxFP0bdWUXOaoddmcbjr5A5XhWJeQSJXvAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gray-700 text-sm font-bold">
                  <span>4.5</span>
                  <div className="flex items-center text-lg text-yellow-300">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                </div>
                <div>
                  <span>some text over here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100] md:w-[50%]">
          <div className="w-full h-full relative flex items-end justify-end">
            <div className="mr-[22%] relative">
              <div className="h-[350px] aspect-square overflow-hidden relative z-50">
                <img
                  className="h-full object-contain"
                  src="https://pngimg.com/d/businessman_PNG6565.png"
                  alt=""
                />
              </div>
              <div className="absolute right-0 bottom-0 h-[75%] rounded-l-full w-full z-20 bg-emerald-500 "></div>
            </div>
            {/* lawyers card */}
            <div className="absolute z-[100] left-0 bottom-[-24px] bg-white shadow-lg px-5 py-3 rounded-sm">
              <header className="my-2 border-b border-gray-100">
                <h3 className="text-gray-700 font-semibold">Text over Here</h3>
              </header>
              {/* lawyers list container */}
              <div
                className="h-[18vh] overflow-y-auto pr-3"
                id="home-lawyer-list-card"
              >
                {[...Array(12)].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center my-1 justify-between gap-12"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-[28px] aspect-square rounded-full overflow-hidden">
                        <img
                          className="h-full object-cover"
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-gray-700 font-medium text-sm">
                          <span>Addis</span>
                          <span>Fanta</span>
                        </div>
                        <div className="mt-[-5px]">
                          <span className="text-xs text-gray-500 mt-[-3px]">
                            some text
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <VscVerifiedFilled className="text-xl text-green-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-[10%] z-[100]">
              <div className="flex items-center gap-3 px-3 py-1 rounded-md bg-yellow-300">
                <div>
                  <button className="bg-white rounded-full mt-1">
                    <SiPostman className="text-xl text-emerald-500" />
                  </button>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinalHome;
