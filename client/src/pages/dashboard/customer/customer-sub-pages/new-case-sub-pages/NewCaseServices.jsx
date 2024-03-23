const NewCaseServices = ({
  stepCounter,
  newCaseHistory,
  setStepCounter,
  setNewCaseHistory,
}) => {
  // services
  const newCaseServices = [
    "Representation",
    "Mediation Center",
    "Advisory",
    "Prepartion of documents and review",
    "Legal Due Diligence",
    "Legal Opinion",
    "Review of content",
    "Visia and Work Permit",
  ];

  const inputChangeHandler = (e) => {
    if (e.target.checked) {
      setNewCaseHistory((prev) => {
        return {
          ...prev,
          services: [...prev.services, e.target.value],
        };
      });
    } else {
      setNewCaseHistory((prev) => {
        return {
          ...prev,
          services: prev.services?.filter((elm) => elm !== e.target.value),
        };
      });
    }
  };
  return (
    <div className="w-full h-[72vh] p-[1%]">
      <div className="w-full h-full bg-white rounded-sm">
        <header className="py-1 px-[3%] border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-700 my-1">Services</h3>
        </header>
        <div className="my-[3%] ml-[7%] mr-[1%] flex flex-col sm:flex-row gap-1">
          {/* checkbox container */}
          <div className="h-max w-[100%] sm:w-[50%] p-[1%] py-1">
            {newCaseServices?.map((service, index) => (
              <div
                key={index}
                className="mb-2 font-medium flex items-center gap-[3%] text-gray-700 p-[1%] transition-all ease-in-out duration-300 hover:shadow-md shadow-sm"
              >
                <input
                  id={`${index}`}
                  type="checkbox"
                  className="focus:outline-none focus:ring-0"
                  value={service}
                  onChange={inputChangeHandler}
                  checked={newCaseHistory?.services?.find((item) =>
                    item === service ? true : false
                  )}
                />
                <label htmlFor={`${index}`} className="cursor-pointer">
                  {service}
                </label>
              </div>
            ))}
          </div>
          <div className="bg-sky-100 w-[100%] sm:w-[50%] rounded-md">
            Text Area Box Here
          </div>
        </div>
        <div className="flex -mt-6 items-center justify-center py-3">
          <button
            className="px-7 py-1 rounded-sm bg-blue-600 text-white"
            onClick={() => {
              setStepCounter(stepCounter + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCaseServices;
