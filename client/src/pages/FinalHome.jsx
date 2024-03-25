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
      <div className="w-full bg-gradient-to-r from-gray-50 to-orange-100 px-[3.75%] pb-[4.75%] pt-[1%] flex items-end justify-between gap-1 relative z-0">
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
        <div className="w-[50%]">
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
                            <SiPostman className="text-xl text-emerald-500"/>
                        </button>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="p-[5%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, blanditiis ullam? Iure, cum minima temporibus ut laboriosam, quam quia quas in asperiores provident harum deserunt, molestiae beatae ipsa modi sit obcaecati nihil esse non? Fugit optio perferendis corrupti praesentium expedita fuga laborum maiores, repudiandae, impedit asperiores modi? Minima possimus quia sint recusandae exercitationem nostrum, adipisci quae cumque aperiam autem ipsum, aspernatur laudantium voluptatibus. Id, voluptatum obcaecati? Eum molestias molestiae doloremque ex itaque veritatis nam reprehenderit nostrum cum expedita, sint consequuntur. Nihil suscipit earum neque vel nam voluptatibus aperiam iusto ad, maxime, in esse consectetur aliquam. Praesentium atque fugiat ad. Perferendis veritatis porro quisquam rem, quod error, quaerat labore soluta at, accusamus fugiat amet facere est. Velit iusto a iure minus unde at obcaecati maxime rem, quasi odit vel repellendus cupiditate animi provident fugiat fugit. Autem ea sed sint esse cum repellat iusto asperiores magnam ut cupiditate, nostrum dolores obcaecati minus amet quasi ducimus culpa quis rem voluptatum? Eos facilis, officiis voluptates excepturi magni totam numquam pariatur laudantium nesciunt quod optio? Soluta aliquam, incidunt blanditiis commodi explicabo eum doloremque? Labore rem corporis non autem totam ipsum consectetur maxime id explicabo repudiandae, aut pariatur provident, cum vitae sed fugiat iusto cupiditate quos! Ut nulla delectus quibusdam voluptatibus, deleniti, odio quae ipsum sequi quam eum voluptatum atque omnis adipisci quas qui consectetur corrupti aliquid, mollitia repudiandae quia incidunt. Commodi, quae voluptate veritatis voluptates expedita, eveniet esse consequatur vero minus quia dignissimos earum accusantium nemo eos laudantium. Quos obcaecati earum sint laudantium quidem dignissimos necessitatibus repudiandae iste, vero consectetur animi in neque ex quaerat iure consequuntur perspiciatis dolore blanditiis temporibus hic eligendi quo ut. Sit repudiandae esse distinctio facilis magnam pariatur reiciendis ducimus saepe quas, nulla ipsa alias! Reprehenderit sint assumenda impedit quibusdam aliquam, eaque iusto libero? Harum debitis, aperiam omnis, eligendi repellat expedita obcaecati atque, vitae reprehenderit nam culpa. Quos et voluptate natus cum sed dignissimos magni eaque esse aliquam veniam adipisci recusandae ratione, provident quas. Impedit animi, provident tenetur officia, exercitationem deleniti quisquam id, ea a est at. Architecto quam, necessitatibus et dolores illo distinctio ut qui? Libero rerum eaque quibusdam reiciendis aut vitae tempore tempora inventore, officiis sint laudantium quam! Esse iusto nesciunt pariatur id culpa placeat obcaecati eaque iste delectus deleniti accusamus officiis sunt vero voluptas, reiciendis ab amet autem sapiente non at. Necessitatibus harum magnam non minus nulla commodi, officiis error eligendi dolores, architecto voluptates tempora repudiandae nam porro mollitia sed ut pariatur veritatis quibusdam maxime. Et odio vitae ex nam corrupti obcaecati voluptates delectus, voluptatibus inventore ullam totam aliquam fuga impedit itaque neque quibusdam qui amet reiciendis ad corporis animi sint. Nemo explicabo animi provident libero, ratione ipsum. Modi incidunt adipisci asperiores molestias possimus, excepturi ratione voluptatum rerum reiciendis laborum omnis vitae minima eius. Animi similique cum dolore accusamus quidem iusto odio ratione, facere cumque recusandae adipisci ab. Doloremque itaque ea, voluptatibus nostrum quis iusto ipsam ipsa ad quam repellat assumenda corrupti accusamus dignissimos numquam rem sint quo quidem cupiditate quisquam ducimus. Blanditiis iusto similique commodi facilis deleniti sint labore assumenda dignissimos molestiae recusandae incidunt ab accusamus quos, accusantium quaerat alias eaque consequatur? Natus, hic. Velit saepe dicta, ex aut maxime porro amet modi ut impedit nostrum voluptate tempora qui illum. Harum ullam, cumque voluptatum error distinctio asperiores minus, est modi commodi excepturi ab minima quasi animi suscipit explicabo cupiditate accusantium illum officia assumenda illo ut sapiente perspiciatis nemo repellat. Ducimus aut natus dicta saepe impedit facere sed! Quisquam atque voluptatem quam voluptate aspernatur et, delectus omnis molestiae voluptatum, qui aliquid eos ipsam nemo reiciendis quia? Nulla dolorem aliquid provident quo incidunt, natus qui suscipit soluta, nam exercitationem nobis sunt quaerat quia laborum, fugit ipsa perspiciatis ab eum nemo obcaecati veniam odio corrupti quod. Maiores, odit ullam ab dignissimos doloribus delectus aliquid facere nobis quis at iure quae aperiam nostrum explicabo adipisci magni fugit possimus. Accusantium consequatur nobis qui cumque tempora magni, illum iusto asperiores officiis expedita maxime libero eveniet ex blanditiis. Ea nam asperiores provident commodi, illo tenetur! Asperiores perspiciatis autem, dolor, ipsam, repellendus sunt quas esse similique quaerat amet expedita deleniti at natus! Eveniet suscipit asperiores quidem facilis fugit error dolorem. Cupiditate facilis perferendis magnam aliquid deleniti ipsum earum, vel debitis possimus ipsam unde quod maxime rem, odit eveniet. Aperiam, ea. Repellat explicabo fugit accusantium fugiat architecto provident vitae quis aliquam exercitationem at blanditiis non, obcaecati distinctio labore rem aspernatur iure animi officiis adipisci dolorem, magni veniam harum quaerat. Voluptates ut repellendus animi quis expedita quos debitis saepe molestias voluptatem praesentium impedit accusantium ipsam, cupiditate provident dicta maxime at. Ab veritatis, voluptatibus laborum reprehenderit, sit animi quae commodi aliquid rerum ducimus dolorem quos? Beatae repellendus delectus perspiciatis quo incidunt cum assumenda! Dolorum aspernatur provident mollitia fugiat incidunt rerum corrupti porro reprehenderit. Eveniet sint, temporibus natus architecto fuga cumque dolore laborum quam vitae, quia velit? Minima atque, sunt fuga, totam, nam doloremque reprehenderit perferendis exercitationem ab error placeat dolore hic mollitia ex corporis temporibus? Quidem non, eum quos autem dolores quasi maiores corrupti delectus fugiat quas dolor dolorem nostrum omnis ipsum sint cumque asperiores nisi aut cupiditate error maxime debitis cum rem. Iusto deserunt architecto fuga ex, error minima molestiae fugit ad dolor ipsam, modi maxime praesentium quasi dolore tempora pariatur adipisci dicta! Vero quam atque non, distinctio nobis sed, quidem ad modi dolorum quas doloremque neque qui necessitatibus sint recusandae tempore odit minus est sit? Debitis nostrum natus numquam sunt asperiores veritatis perferendis in quasi eveniet earum, aspernatur quae non molestiae impedit nihil nulla error? Nemo deserunt deleniti dicta nam ut velit eius autem aut modi expedita suscipit, nihil ipsam animi eveniet. Ullam aperiam provident eligendi voluptates, voluptatum aut pariatur. Quis beatae cumque molestias voluptatibus perferendis tenetur harum odio praesentium commodi perspiciatis. Tempore asperiores qui consequatur reprehenderit nesciunt deserunt illo! Quae numquam possimus in cumque tenetur, vel sed pariatur. Beatae tempora itaque eligendi ipsum quibusdam obcaecati accusantium impedit molestias cum atque magnam expedita ipsam pariatur fugit, nisi voluptatibus sequi incidunt, harum veniam ducimus asperiores quasi soluta dolorem vitae? Eaque nulla aliquam modi, quae excepturi consectetur nesciunt.
        </p>
      </div>
    </div>
  );
};

export default FinalHome;
