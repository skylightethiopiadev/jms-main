import { useState } from "react";

// sub pages
import CaseCategory from "./customers-dashboard-new-case/CaseCategory";
import NewCaseType from "./customers-dashboard-new-case/NewCaseType";
import NewCaseServices from "./customers-dashboard-new-case/NewCaseServices";
import LawyerList from "./customers-dashboard-new-case/LawyerList";
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
        {
            title: "Lawyers",
            description: "select for your case",
        },
    ];

    const [newCase, setNewCase] = useState(null);

    const [newCaseHistory, setNewCaseHistory] = useState({
        caseCategory: "",
        subCaseCategory: {
            subType: null,
            subSubCaseCategory: {
                subSubType: null,
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
                "Civil cases revolve around legal disagreements among private individuals, businesses, or entities and aim to address individual rights and interests. Resolutions to these disputes typically entail financial compensation or forced performances rather than imprisonment. Common cases include disputes over inheritance, property, family matters, personal injury claims, unjust enrichment, contract disputes, and other legal conflicts that do not typically involve imprisonment. The focus of civil cases is to provide remedies to those affected while ensuring equitable dispute resolution.",
            subCategories: [
                {
                    caseName: "Contract",
                    subType: [
                        {
                            title: "General contracts",
                            services: [
                                "Negotiate on your behalf",
                                "Contract Drafting",
                                "Review Contract (Compliance check)",
                                "Legal Representation (court, arbitration or others)",
                                "Authentication and Registration of contracts",
                                "Legal Consultation",
                            ],
                        },
                        {
                            title: "Contract of special movables",
                            services: [
                                "Contract Negotiate",
                                "Draft contract",
                                "Review contract (compliance check)",
                                "Legal due diligence",
                                "Authentication and registration of contracts",
                                "Security Interests and Liens",
                                "Legal consultation",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: "Sale or lease of buildings",
                            services: [
                                "Contract Negotiation",
                                "Draft contract",
                                "Review contract (compliance check)",
                                "Legal Due Diligence",
                                "Authentication and Registration of contracts",
                                "Tax Guidance",
                                "Legal consultation",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: "Construction",
                            services: [
                                "Contract Negotiation",
                                "Contract Drafting",
                                "Review contract (compliance check)",
                                "Legal Due Diligence",
                                "Authentication and Registration of contracts",
                                "Regulatory compliance check",
                                "Legal consultation",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: "Supply of goods and services",
                            services: [
                                "Contract Negotiation",
                                "Contract Drafting",
                                "Review contract (compliance check)",
                                "Legal Due Diligence",
                                "Authentication and Registration of contracts",
                                "Risk mitigation ",
                                "Regulatory compliance check",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                            ],
                        },
                        {
                            title: "Rental of machineries and vehicles",
                            services: [
                                "Contract negotiation",
                                "Legal compliance check",
                                "Drafting contract",
                                "Reviewing contract",
                                "Legal due diligence",
                                "Legal consultation",
                                "Legal consultation",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: "Loan",
                            services: [
                                "Contract Negotiation",
                                "Contract Drafting",
                                "Review contract (compliance check)",
                                "Legal Due Diligence",
                                "Authentication and Registration of contracts",
                                "Risk mitigation",
                                "Regulatory compliance check",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others",
                            ],
                        },
                    ],
                },
                {
                    caseName: "Family",
                    subType: [
                        {
                            title: 'Maintenance',
                            services: [
                                "Guidance on Maintenance Obligations",
                                "Claim negotiation",
                                "Drafting agreements",
                                "Legal documents preparation",
                                "Legal consultation",
                                "Legal representation (court, arbitration or others)",
                            ]
                        },
                        {
                            title: 'Adoption',
                            services: [
                                "Draft marriage contracts and divorce agreement",
                                "Negotiation",
                                "Legal consultation",
                                "Legal documents preparation",
                                "Legal representation(court, arbitration or others)",
                            ]
                        },
                        {
                            title: 'Divorce',
                            services: [
                                "Legal document preparation",
                                "Legal compliance",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                            ]
                        },
                        {
                            title: 'Irregular Union',
                            services: [
                                "Verification of Irregular union",
                                "Negotiation",
                                "Legal consultancy",
                                "Legal documents preparation",
                                "Legal representation(court, arbitration or others)",
                            ],
                        },
                    ],
                },
                {
                    caseName: "Succession",
                    services: [
                        "Assist the creation of will",
                        "Secure legal documents",
                        "Liquidation",
                        "Assist property division",
                        "Legal consultation",
                        "Court representation (court, arbitration or others)",
                        "Mediation",
                    ],
                },
                {
                    caseName: "Employment",
                    services: [
                        "Draft employment contract",
                        "Review employment contract",
                        "Termination Advice",
                        "Collective bargaining and labour relation",
                        "Work policy’s and manual preparation",
                        "Dispute resolution",
                        "Legal representation (court, arbitration or others)",
                        "Intellectual Property (IP) and Technology",
                        "Immigration and Work Visas",
                        "Tax Compliance and Obligations",
                        "Work Safety",
                    ],
                },
                {
                    caseName: "Property",
                    services: [
                        "Negotiation",
                        "Legal due diligence and conveyance",
                        "Contract drafting",
                        "Contract review",
                        "Legal representation (court, arbitration or others)",
                        "Legal consultancy",
                    ],
                },
                {
                    caseName: "Torts",
                    services: [
                        "Legal consultancy",
                        "Case evaluation",
                        "Negotiation",
                        "Document preparation",
                        "Damage calculation",
                        "Legal consultation",
                        "Legal representation",
                    ],
                },
            ],
        },
        {
            caseCategory: "Criminal",
            description:
                "Criminal cases encompass legal conflicts initiated by the state against individuals or businesses for breaching criminal laws, often resulting in severe penalties such as imprisonment, fines, community service, or in extreme cases, the death penalty. These disputes involve accusations of behavior that contravenes established criminal statutes and are pursued by public prosecutors. Examples include offenses like theft, murder, fraud, money laundering, assault, and other illicit actions, typically impacting individuals or society at large.",
            subCategories: [
                {
                    caseName: "Ordinary crime",
                    services: [
                        "Legal consultation",
                        "Preparing legal documents",
                        "Legal representation (court, arbitration or others)",
                        "Bail, bond and surety",
                        "Negotiation and plea bargaining",
                    ],
                },
                {
                    caseName: "Corruption",
                    services: [
                        "Anti corruption compliance",
                        "Legal consultation",
                        "Investigations and Due Diligence",
                        "Preparing legal documents",
                        "Negotiation and plea bargaining",
                        "Legal representation(court, arbitration or others)",
                    ],
                },
                {
                    caseName: "Money laundering (financial fraud)",
                    services: [
                        "Anti money laundering compliance",
                        "Legal consultation",
                        "Risk Advisories and Fraud Prevention",
                        "Due diligence",
                        "Preparing legal documents",
                        "Negotiation and plea bargaining",
                        "Legal representation (court, arbitration, and others",
                    ],
                },
                {
                    caseName: "Tax and customs related crimes",
                    services: [
                        "Tax Compliance and consultancy",
                        "Customs Compliance and Consulting",
                        "Representation during customs or tax investigation",
                        "Due diligence",
                        "Legal consultancy",
                        "Policy advice",
                        "Document preparation",
                        "Legal representation(court, arbitration or others)",
                    ],
                },
            ],
        },
        {
            caseCategory: "Corporate",
            description:
                "Corporate or commercial matters involve legal disputes among businesses or individuals in commercial activities. These cases focus on resolving conflicts over business rights, transactions, and obligations through legal methods. Resolutions usually involve financial settlements, contracts, or regulatory adherence rather than punitive actions. Examples include disputes over mergers, contracts, intellectual property, shareholders, and regulatory compliance, all aiming for fair resolution and legal compliance in the business realm.",
            subCategories: [
                {
                    caseName: "Contract",
                    subType: [
                        {
                            title: 'Contract of special movables (vehicles)',
                            services: [
                                "Contract Negotiate",
                                "Draft contract",
                                "Review contract (compliance check)",
                                "Legal due diligence",
                                "Authentication and registration of contracts",
                                "Security Interests and Liens",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                            ]
                        },
                        {
                            title: 'Sale or lease of buildings',
                            services: [
                                "Contract Negotiation",
                                "Draft contract",
                                "Review contract (compliance check)",
                                "Legal Due Diligence",
                                "Authentication and Registration of contracts",
                                "Tax Guidance",
                                "Legal consultation",
                                "Legal representation (court, arbitration or others)",
                            ]
                        },
                        {
                            title: 'Construction',
                            services: [
                                "Contract Negotiation",
                                "Contract Drafting",
                                "Review contract (compliance check)",
                                "Legal Due Diligence",
                                "Authentication and Registration of contracts",
                                "Regulatory compliance check",
                                "Safety assessment",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                            ]
                        },
                        {
                            title: 'Supply of goods and services',
                            services: [
                                "Contract Negotiation",
                                "Contract Drafting",
                                "Review contract (compliance check)",
                                "Authentication and Registration of contracts",
                                "Legal Due Diligence",
                                "Risk mitigation",
                                "Regulatory compliance check",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                            ]
                        },
                        {
                            title: 'Rental of machineries and vehicles',
                            services: [
                                "Contract negotiation",
                                "Legal compliance check",
                                "Drafting contract",
                                "Reviewing contract",
                                "Business formation",
                                "Legal due diligence",
                                "Legal consultation",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: 'Loan',
                            services: [
                                "Contract Negotiation",
                                "Review contract (compliance check)",
                                "Legal Due Diligence",
                                "Authentication and Registration of contracts",
                                "Risk mitigation",
                                "Regulatory compliance check",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                            ],
                        },
                    ],
                },
                {
                    caseName: "Intellectual Property",
                    subType: [
                        {
                            title: 'Copyright',
                            services: [
                                "Copyrights application preparation",
                                "Copyrights registration",
                                "Faire use and consulting",
                                "Copyrights violation investigation",
                                "Legal Compliance",
                                "Contracts drafting",
                                "Copyrights licensing and assignment",
                                "Legal consultancy",
                                "Legal representation(court, arbitration or others)",
                                "International copyrights service",
                            ]
                        },
                        {
                            title: 'Patent',
                            services: [
                                "Patent search and analysis",
                                "Patent application preparation",
                                "Patent registration",
                                "Patent strategy and counseling",
                                "Due Diligence and Freedom-to-Operate Analysis",
                                "Patent licensing and assignment",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                                "International patent services",
                            ],
                        },
                        {
                            title: 'Trademark',
                            services: [
                                "Trademark Search and Clearance",
                                "Trademark Registration",
                                "Trademark Portfolio Management",
                                "Trademark Licensing and Assignments",
                                "Trademark Watching and Monitoring",
                                "Licensing and commercialization",
                                "Trademark Due Diligence",
                                "Customs Recordation",
                                "Legal consultation",
                                "Legal representation(court, arbitration or others)",
                            ],
                        },
                        {
                            title: 'Utilities',
                            services: [
                                "Utility Model Registration and Filing",
                                "Prior Art Search and Analysis",
                                "Portfolio Management",
                                "Due diligence",
                                "Licensing and commercialization",
                                "Legal Compliance",
                                "Legal consultancy",
                                "Legal representation(court, arbitration or others)",
                            ],
                        },
                        {
                            title: 'Geographical indications',
                            services: [
                                "GI Registration",
                                "Due diligence search",
                                "Licensing and commercialization",
                                "Quality Control and Compliance",
                                "Legal consultancy",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: 'Varieties and plant breeds',
                            services: [
                                "Application and Registration",
                                "Due diligence and clearance",
                                "Licensing and commercialization",
                                "Farmers’ Rights and Community Engagement",
                                "International protection",
                                "Legal consultancy",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                    ],
                },
                {
                    caseName: "Financial sector",
                    subType: [
                        {
                            title: 'Banking',
                            services: [
                                "Review contract banking transaction contracts",
                                "Draft contracts",
                                "Document preparation",
                                "Business registration",
                                "Legal compliance (prudential and market conduct regulation)",
                                "Due diligence and risk management",
                                "Legal consultation",
                                "legal representation",
                            ],
                        },
                        {
                            title: 'Insurance',
                            services: [
                                "Negotiation",
                                "legal consultancy",
                                "Insurance policy drafting",
                                "Insurance policy review",
                                "Regulatory compliance (prudential and market conduct regulation)",
                                "Due diligence",
                                "Risk Assessment and Mitigation",
                                "Legal representation",
                            ],
                        },
                        {
                            title: 'Capital',
                            services: [
                                "Document preparation",
                                "Document review",
                                "Business Licensing support",
                                "Legal compliance (prudential and market conduct regulation)",
                                "Regulatory compliance",
                                "Support on IPOs",
                                "Legal due diligence",
                                "Legal representation  (court, arbitration or others)",
                            ],
                        },
                    ],
                },
                {
                    caseName: "Trade and Investment",
                    subType: [
                        {
                            title: 'Incorporation',
                            services: [
                                "Assistance in choice of business organization",
                                "Document preparation",
                                "Business registration",
                                "Operational assistance",
                                "Merger, Acquisitions, and Division",
                                "Corporate governance",
                                "Legal compliance",
                                "Legal consultancy",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: 'Bankruptcy (scheme of arrangement or dissolution)',
                            services: [
                                "Negotiation",
                                "Document preparation",
                                "Asset management",
                                "Discharge Analysis",
                                "Credit Counseling",
                                "Property Protection",
                                "Restructuring (including cross boarder)",
                                "Legal consultancy",
                                "Due diligence",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: 'Merger and Division',
                            services: [
                                "Negotiation",
                                "Structuring Transactions",
                                "Document preparation",
                                "Risk management",
                                "Due diligence",
                                "Legal compliance",
                                "Employment and Labor Issues",
                                "Post integration support",
                                "Intellectual property",
                                "Legal consultancy",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        {
                            title: 'Investment',
                            services: [
                                "Strategic Investment Design",
                                "Legal compliance",
                                "Legal due diligence",
                                "Negotiation",
                                "Drafting agreements",
                                "Tax related services",
                                "Labour and employment",
                                "Intellectual property issue",
                                "Investment license",
                                "Work permit",
                                "Government Relations and Advocacy",
                                "Legal consultancy",
                                "Legal representation (court, arbitration or others)",
                            ],
                        },
                        // { title: 'Reorganization', services: [] },
                    ],
                },
                // {
                //     caseName: "International trade and investment",
                //     services: [],
                // },
                {
                    caseName: "Tax",
                    services: [
                        "Tax Compliance",
                        "Tax Optimization",
                        "Tax Planning and Structuring",
                        "Trainings",
                        "International taxation",
                        "Legal consultation",
                        "Legal representation (court, arbitration or others)",
                    ],
                },
                {
                    caseName: "Customs",
                    services: [
                        "Documentation Preparation",
                        "License and Permit Acquisition",
                        "Import export compliance",
                        "Due diligence",
                        "Legal consultation",
                        "Legal representation (court, arbitration or others)",
                    ],
                },
                {
                    caseName: "Real estate, property, and conveyance",
                    services: [
                        "Drafting contracts",
                        "Reviewing contracts",
                        "Legal due diligence",
                        "Land acquisition",
                        "Investment license",
                        "Mortgage",
                        "Legal consultancy",
                        "Legal representation",
                    ],
                },
                // {
                //     caseName: "Joint venture",
                //     services: [],
                // },
                // {
                //     caseName: "Torts",
                //     services: [],
                // },
            ],
        },
    ];

    return (
        <div className="flex-grow">
            <SteperComponent
                steps={4}
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
            ) : stepCounter === 3 ? (
                <LawyerList
                    stepCounter={stepCounter}
                    setStepCounter={setStepCounter}
                    newCaseHistory={newCaseHistory}
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
