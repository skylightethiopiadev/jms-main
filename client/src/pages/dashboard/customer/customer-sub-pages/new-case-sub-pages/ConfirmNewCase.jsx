const ConfirmNewCase = ({ stepCounter, setStepCounter, newCaseHistory }) => {
  console.log(newCaseHistory);
  return (
    <div className="w-full h-[72vh] p-[1%]">
      <div className="w-full h-full bg-white rounded-sm">
        <header className="px-[3%] py-1 border-b border-gray-100 text-center">
          <div>
            <h3 className="text-xl font-bold text-gray-700">Summary</h3>
          </div>
        </header>
        <div className="flex items-center justify-center">
          <div className="m-1 p-[5%] rounded-sm shadow-md">
            <div>
              <h3 className="text-xl text-gray-700 font-bold">Case Category: {newCaseHistory?.caseCategory}</h3>
            </div>
            <div>
              <span className="text-lg text-gray-700 font-bold">
                Case Specific Type: {newCaseHistory?.subCaseCategory?.title}
              </span>
            </div>
            {newCaseHistory?.subCaseCategory?.subSubCaseCategory?.title ? (
              <div>
                <span className="text-gray-700 font-bold">
                  More SPecifc:
                  {newCaseHistory?.subCaseCategory?.subSubCaseCategory?.title}
                </span>
              </div>
            ) : (
              <></>
            )}
            <div className="flex items-center justify-center my-3">
              <button className="px-5 py-1 rounded-sm bg-blue-600 text-white" onClick={()=>{
                setStepCounter(stepCounter+1)
              }}>confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNewCase;
