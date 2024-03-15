const CaseType = ({ stepCounter, setStepCounter }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="text-2xl font-bold">Case Type</div>
        <button
          className="px-3 py-1 rounded-sm text-white bg-blue-600"
          onClick={() => {
            setStepCounter(stepCounter + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default CaseType;
