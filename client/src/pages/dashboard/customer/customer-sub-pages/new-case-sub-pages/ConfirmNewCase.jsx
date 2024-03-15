const ConfirmNewCase = ({ stepCounter, setStepCounter }) => {
    return <div>
        <div>Confirm New Case</div>
        <div className="flex items-center justify-center gap-x-7">
           
            <button className="text-white bg-blue-700 px-3 py-1 rounded-sm" onClick={() => {
                setStepCounter(stepCounter + 1)
            }}>Confirm</button>
        </div>
  </div>;
};

export default ConfirmNewCase;
