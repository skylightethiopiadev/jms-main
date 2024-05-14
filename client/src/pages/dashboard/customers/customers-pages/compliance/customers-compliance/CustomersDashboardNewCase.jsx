import { useState } from "react";

// sub pages
import CaseCategory from "./customers-dashboard-new-case/CaseCategory";
import NewCaseType from "./customers-dashboard-new-case/NewCaseType";
import NewCaseServices from "./customers-dashboard-new-case/NewCaseServices";
import ConfirmNewCase from "./customers-dashboard-new-case/ConfirmNewCase";

// stepper 
import SteperComponent from "../../../../customer/stepers/SteperComponent"

const CustomersDashboardNewCase = () => {

    // states
    const [stepCounter, setStepCounter] = useState(0)

    // stepper
    const stepsHint = [
        {
            title: "Case",
            description: "category",
        },
        {
            title: "Specification",
            description: "sub-category",
        },
        {
            title: "Services",
            description: "service options",
        },
    ];

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
            "Civil cases are cases mostly involving individuals like contract of loan, divorce, adoption, maintenance, employment, succession of family's property. Issues related",
    });

    // caste categories
    const caseCategories = [
        {
            caseCategory: "Civil",
            description:
                "Civil cases are cases mostly involving individuals like contract of loan, divorce, adoption, maintenance, employment, succession of family's property. Issues related civil matters are usually settled by court proceedings. Individual clients having issues like contract of loan, sale of property, employment, divorce, partition of property, maintenance, adoption, succession are encouraged to contact our lawyers expedites in areas of civil cases",
            subCategories: [
                {
                    caseName: "Contract",
                    subType: [
                        "General contracts",
                        "Contract of special movables",
                        "Sale or lease of buildings",
                        "Construction",
                        "Supply of goods and services",
                        "Rental of machineries and vehicles",
                        "Loan",
                    ],
                },
                {
                    caseName: "Family",
                    subType: ["Maintenance", "Adoption", "Divorce", "Irregular Union"],
                },
                {
                    caseName: "Succession",
                },
                {
                    caseName: "Employment",
                },
                {
                    caseName: "Property",
                },
                {
                    caseName: "Torts",
                },
            ],
        },
        {
            caseCategory: "Criminal",
            description:
                "Criminal cases are cases related to different offenses against laws enacted to prevent crimes. Cases related to human trafficking, terrorism, corruption, tax invasion, failure of complying with different regulatory requirements, financial fraud, and other acts result in penalizing the offender. The suspect may be arrested by the police for interrogation. It involves police, public prosecutor, judge and lawyer. When it it is proved , the person suspected of the crime could be convicted and sent to prison. Thus anybody encountered such a problem can contact lawyers with requisite in areas via our portal",
            subCategories: [
                {
                    caseName: "Ordinary crime",
                },
                {
                    caseName: "Corruption",
                },
                {
                    caseName: "Money laundering (financial fraud)",
                },
                {
                    caseName: "Tax and customs related crimes",
                },
            ],
        },
        {
            caseCategory: "Corporate",
            description:
                "Commercial Cases are cases involving complex transactions such as international business. Formation, registration, reorganization, merger, acquisition, winding up, of corporations; bankruptcy (scheme of arrangement or liquidation), issues related to tax and customs assessment, joint venture, real estate and property, supply of goods and services, commercial loan, registration of trade mark, patent, utility rights",
            subCategories: [
                {
                    caseName: "Contract",
                    subType: [
                        "Contract of special movables (vehicles)",
                        "Sale or lease of buildings",
                        "Construction",
                        "Supply of goods and services",
                        "Rental of machineries and vehicles",
                        "Loan",
                    ],
                },
                {
                    caseName: "Intellectual Property",
                    subType: [
                        "Copyright",
                        "Patent",
                        "Trademark",
                        "Utilities",
                        "Geographical indications",
                        "Varieties and plant breeds",
                    ],
                },
                {
                    caseName: "Financial sector",
                    subType: ["Banking", "Insurance", "Capital"],
                },
                {
                    caseName: "Corporate",
                    subType: [
                        "Incorporation",
                        "Bankruptcy (scheme of arrangement or dissolution)",
                        "Merger",
                        "Acquisition",
                        "Reorganization",
                    ],
                },
                {
                    caseName: "International trade and investment",
                },
                {
                    caseName: "Tax",
                },
                {
                    caseName: "Customs",
                },
                {
                    caseName: "Real estate, property, and conveyance",
                },
                {
                    caseName: "Joint venture",
                },
                {
                    caseName: "Torts",
                },
            ],
        },
    ];

    return (
        <div className="flex-grow">
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
    )
}

export default CustomersDashboardNewCase
