import { useState } from "react";

// steper component
import SteperComponent from "../stepers/SteperComponent";

// new case sub pages
import CaseCategory from "./new-case-sub-pages/CaseCategory";
import NewCaseType from "./new-case-sub-pages/NewCaseType";
import NewCaseServices from "./new-case-sub-pages/NewCaseServices";
import SelectLawyer from "./new-case-sub-pages/SelectLawyer";
import ConfirmNewCase from "./new-case-sub-pages/ConfirmNewCase";

// main
// NewCase
const NewCase = () => {
  // stepper count
  // const [stepper, setStepper] = useState(0);
  const [stepCounter, setStepCounter] = useState(0);
  const [newCase, setNewCase] = useState(null);

  const [newCaseHistory, setNewCaseHistory] = useState({
    caseCategory: "",
    subCaseCategory: {
      title: "",
      subSubCaseCategory: {
        title: "",
      },
    },
    services: [],
    description:
      "Civil cases are cases mostly involving individuals like contract of loan, divorce, adoption, maintenance, employement, succession of family's property. Issues related",
  });

  // caste categories
  const caseCategories = [
    {
      caseCategory: "Civil",
      description:
        "Civil cases are cases mostly involving individuals like contract of loan, divorce, adoption, maintenance, employement, succession of family's property. Issues related civil matters are usually settled by court proceedings. Individual clients having issues like contract of loan, sale of property, employment, divorce, partition op property, maintenance, adoption, succession are encouraged to contact our lawyers experties in areas of civil cases",
      subCategories: [
        {
          caseName: "Contract",
          subType: [
            "contract of special movables(Vehicles)",
            "sale or lease of buildings",
            "Construction",
            "Supply of goods and services",
            "Rental of machineries and vehicles",
            "loan",
          ],
        },
        {
          caseName: "Succession",
        },
        {
          caseName: "Family",
          subType: ["maintenances", "adoption", "divorce"],
        },
        {
          caseName: "Employment",
        },
        {
          caseName: "Property",
        },
      ],
    },
    {
      caseCategory: "Criminal",
      description:
        "Criminal cases are cases related to different offences against laws enacted to prevent crimes. Cases related to human traffking, terrorism, curruption, tax invasion, failure of complying with different regulatory requiremnts, financial fraud, and other acts result in penalizing the offender. The suspect may be arrested by the plice for interrogation. It involves police, public prosecutor, judge and lawyer. When it it is proved , the person suspected of the crime could be convicted and sent to prison. Thus anybody encoutered such a problem can contact lawyers with requistise in areas via our portal",
      subCategories: [
        {
          caseName: "Ordinary crime",
        },
        {
          caseName: "Corruption",
        },
        {
          caseName: "Money Laundering(Financial Froud)",
        },
        {
          caseName: "Tax and Customs Related Crimes",
        },
      ],
    },
    {
      caseCategory: "Commercial (Corporate Law)",
      description:
        "Commercial Cases are cases involving complex transactions such as international bussiness. Formation, registration, reorganization, merger, acquisition, winding up, of corporations; bankrupty (scheme of arrangement or liquidation), issues related to tax and customs assessment, joint venture, real estate and property, supply of goods and services, commercial loan, registration of trade mark, patent, utility rights",
      subCategories: [
        {
          caseName: "International Trade and Investment",
        },
        {
          caseName: "Tax",
        },
        {
          caseName: "Customes",
        },
        {
          caseName: "Contract",
          subType: [
            "contract of special movables(Vehicles)",
            "sale or lease of buildings",
            "Construction",
            "Supply of goods and services",
            "Rental of machineries and vehicles",
            "loan",
          ],
        },
        {
          caseName: "Intellectual Property",
          subType: [
            "Copyright",
            "Patent",
            "trade mark",
            "utilities",
            "geographical indications",
            "varieties and plant breeds",
          ],
        },
        {
          caseName: "Financial Sector",
          subType: ["banking", "insurance", "capital"],
        },
        {
          caseName: "Corporate",
          subType: [
            "incorporation",
            "bankrupty (scheme of arrangement or dissolution)",
            "merger",
            "acquisition",
            "reorganization",
          ],
        },
        {
          caseName: "Real Estate, Property, and Conveyance",
        },
        {
          caseName: "Joint Venture",
        },
        {
          caseName: "Torts",
        },
      ],
    },
  ];

  // steper
  const stepsHint = [
    {
      title: "Case",
      description: "category",
    },
    {
      title: "Specification",
      description: "sub category",
    },
    {
      title: "Services",
      description: "service options",
    },
  ];

  // console.log(serviceType, "service type");
  return (
    <div className="bg-gray-100 h-full rounded-t-md">
      <SteperComponent
        steps={3}
        stepsHint={stepsHint}
        stepCounter={stepCounter}
        setStepCounter={setStepCounter}
      />
      {/* content here */}
      {stepCounter === 0 ? (
        <CaseCategory
          caseCategories={caseCategories}
          newCase={newCase}
          stepCounter={stepCounter}
          setNewCase={setNewCase}
          setStepCounter={setStepCounter}
          setNewCaseHistory={setNewCaseHistory}
        />
      ) : stepCounter === 1 ? (
        <NewCaseType
          caseCategories={caseCategories}
          newCase={newCase}
          stepCounter={stepCounter}
          setNewCase={setNewCase}
          setStepCounter={setStepCounter}
          setNewCaseHistory={setNewCaseHistory}
        />
      ) : stepCounter === 2 ? (
        <NewCaseServices
          stepCounter={stepCounter}
          newCaseHistory={newCaseHistory}
          setStepCounter={setStepCounter}
          setNewCaseHistory={setNewCaseHistory}
        />
      ) : (
        <ConfirmNewCase
          stepCounter={stepCounter}
          setStepCounter={setStepCounter}
          newCaseHistory={newCaseHistory}
        />
      )}
    </div>
  );
};

export default NewCase;
