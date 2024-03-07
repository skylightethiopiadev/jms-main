const AddisHome = () => {
  return (
    <div className="flex-grow bg-gray-100 h-[80vh] overflow-y-auto">
      {/* banner */}
      <div className="h-[250px] flex items-center justify-center relative">
        <div className="absolute left-0 bottom-0 z-10 w-full h-full bg-black">
          <img
            src="https://media.istockphoto.com/id/1139699594/photo/law-concept-themis-statue-judge-hammer-and-books.jpg?s=170667a&w=0&k=20&c=PGPkWvwrenf6qzJCnHef5MpSKeSzoum2TP45HpS6aZs="
            alt=""
            className="w-full h-full opacity-[.5]"
          />
        </div>
        <div className="relative z-40 flex flex-col items-center justify-center text-gray-100 max-w-[820px]">
          <h3 className="text-3xl my-1 font-bold">some text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            explicabo qui laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddisHome;
