const NextToFamilyStatus = ({stepCounter,setStepCounter}) => {
    return <div>
        <div className="flex items-center justify-center text-2xl font-bold">Next To Family Status</div>
        <div className="flex items-center justify-center gap-x-7">
            <button className="text-white bg-blue-700 px-3 py-1 rounded-sm" onClick={() => {
                setStepCounter(stepCounter - 1)
            }}>back</button>
            <button className="text-white bg-blue-700 px-3 py-1 rounded-sm" onClick={() => {
                setStepCounter(stepCounter + 1)
            }}>next</button>
        </div>
  </div>;
};

export default NextToFamilyStatus;
