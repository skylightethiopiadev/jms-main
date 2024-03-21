import { useState } from "react";

// steper component
import SteperComponent from "../stepers/SteperComponent";

// new case sub pages
import CaseCategory from "./new-case-sub-pages/CaseCategory";
import FamilyStatus from "./new-case-sub-pages/FamilyStatus";
import NextToFamilyStatus from "./new-case-sub-pages/NextToFamilyStatus";
import SelectLawyer from "./new-case-sub-pages/SelectLawyer";
import ConfirmNewCase from "./new-case-sub-pages/ConfirmNewCase";

// main
// NewCase
const NewCase = () => {
  // stepper count
  // const [stepper, setStepper] = useState(0);
  const [stepCounter, setStepCounter] = useState(0);

  // steper
  const stepsHint = [
    {
      title: "Case Categories",
      description: "select case category",
    },
    {
      title: "case",
      description: "start your case",
    },
    {
      title: "case",
      description: "start your case",
    },
    {
      title: "case",
      description: "start your case",
    },
  ];

  return (
    <div className="bg-gray-100 h-full">
      <SteperComponent
        steps={4}
        stepsHint={stepsHint}
        stepCounter={stepCounter}
        setStepCounter={setStepCounter}
      />
      {/* content here */}
      {stepCounter === 0 ? (
        <CaseCategory stepCounter={stepCounter} setStepCounter={setStepCounter} />
      ) : stepCounter === 1 ? (
        <FamilyStatus
          stepCounter={stepCounter}
          setStepCounter={setStepCounter}
        />
      ) : stepCounter === 2 ? (
        <NextToFamilyStatus
          stepCounter={stepCounter}
          setStepCounter={setStepCounter}
        />
      ) : stepCounter === 3 ? (
        <SelectLawyer
          stepCounter={stepCounter}
          setStepCounter={setStepCounter}
        />
      ) : (
        <ConfirmNewCase
          stepCounter={stepCounter}
          setStepCounter={setStepCounter}
        />
      )}
    </div>
  );
};

export default NewCase;
