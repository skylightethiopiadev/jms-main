import { useState } from "react";
import { v4 as uuid4 } from "uuid";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";
// components
// header
const Header = () => {
  return (
    <header className="h-[7vh] rounded-t-md flex items-center bg-sky-100">
      Header
    </header>
  );
};

// secondary sub list
const SecondarySubList = props => {
  let { seondarySubListItem } = props;
  return (
    <div>
      <header>{seondarySubListItem.title}</header>
    </div>
  );
};

// primary sub list case category
const PrimarySubListItem = props => {
  let { primarySubListItem } = props;
  return (
    <div>
      <header>{primarySubListItem.title}</header>
      <div>
        {primarySubListItem.secondarySubList?.length ? (
          <>
            {primarySubListItem.secondarySubList?.map((item, index) => {
              return (
                <SecondarySubList key={index} seondarySubListItem={item} />
              );
            })}
          </>
        ) : (
          <div>---</div>
        )}
      </div>
    </div>
  );
};

// main case category item
const MainCaseCategoryItem = props => {
  let { caseCategory } = props;
  return (
    <div className="p-1 my-3 mx-1 border border-gray-100 rounded-sm">
      <header className="p-1 flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-1">
          <div className="w-[22px] aspect-square flex items-center justify-center rounded-full bg-green-500 overflow-hidden cursor-pointer text-white text-3xl">
            <MdKeyboardArrowRight />
          </div>
          <div>{caseCategory.title}</div>
        </div>
        {/* right */}
        <div>right</div>
      </header>
      {
        caseCategory.description
          ?
          <div>description</div>
          :
          <div>add description</div>
      }
      
      {caseCategory.primarySubList?.length ? (
        <div className="h-0 overflow-hidden">
          {caseCategory.primarySubList?.map((item, index) => {
            return <PrimarySubListItem key={index} primarySubListItem={item} />;
          })}
        </div>
      ) : (
        <div>---</div>
      )}
    </div>
  );
};

// case category list
const CaseCategories = props => {
  const { caseCategories } = props;
  return (
    <>
      {caseCategories?.map((item, index) => {
        return <MainCaseCategoryItem key={index} caseCategory={item} />;
      })}
    </>
  );
};
const SuperAdminCase = () => {
  // states
  const [caseCategories, setCaseCategories] = useState([
    {
      _id: "corp-1",
      title: "Corporate",
      description: '',
      primarySubList: [
        {
          _id: "inte-1",
          title: "Intellectual Property",
          secondarySubList: [
            {
              _id: "copy-1",
              title: "Copyright"
            },
            {
              _id: "trad-1",
              title: "Trademark"
            }
          ]
        },
        {
          _id: "fina-1",
          title: "Financial Sector",
          secondarySubList: [
            {
              _id: "bank-1",
              title: "Banking"
            },
            {
              _id: "insu-1",
              title: "Insurance"
            }
          ]
        }
      ]
    },
    {
      _id: "civi-1",
      title: "Civil",
      primarySubList: [
        {
          _id: "cont-1",
          title: "Contract",
          secondarySubList: [
            {
              _id: "cons-1",
              title: "Construction"
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div className="bg-white rounded-md min-h-[89vh]">
      <Header />
      {/* content container */}
      <div>
        {caseCategories?.length ? (
          <CaseCategories
            caseCategories={caseCategories}
            setCaseCategories={setCaseCategories}
          />
        ) : (
          <div>No Case Yet</div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminCase;
