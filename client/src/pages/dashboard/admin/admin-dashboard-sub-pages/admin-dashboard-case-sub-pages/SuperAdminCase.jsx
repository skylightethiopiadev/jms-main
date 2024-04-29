import { useState } from "react";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdSave } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

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
  const [isEdit, setIsEdit] = useState(null)
  return (
    <div>
      <header className="flex items-center justify-between gap-1">
        {/* left */}
        <div className="flex-grow flex items-center gap-2">
          <div className="w-[22px] aspect-square flex items-center justify-center rounded-full bg-green-500 overflow-hidden cursor-pointer text-white text-3xl">
            <MdKeyboardArrowRight />
          </div>
          <div className={`flex-grow bg-red-20 my-[.105rem] border  ${isEdit?._id === primarySubListItem._id ? 'border-green-500' : 'border-transparent'}`}>
            <input className="focus:outline-none focus:ring-0 p-1 w-full bg-transparent border-none" type="text" value={primarySubListItem.title} disabled={isEdit?._id === primarySubListItem._id ? false : true} />
          </div>
        </div>
        <div className="self-start flex items-center gap-1">
          <div>
            {
              isEdit?._id === primarySubListItem._id
                ?
                <div className="w-[22px] aspect-square rounded-full overflow-hidden bg-green-500 flex items-center justify-center  text-white cursor-pointer" onClick={() => {
                  setIsEdit(null)
                  // setEditMode('')
                }}>
                  <MdSave />
                </div>
                :
                <div className="w-[22px] transition-all ease-in-out duration-300 hover:opacity-100 opacity-50 aspect-square rounded-full overflow-hidden bg-green-500 flex items-center justify-center  text-white cursor-pointer" onClick={() => {
                  setIsEdit(primarySubListItem)
                  // setEditMode('TITLE')
                }}>
                  <CiEdit />
                </div>
            }
          </div>
          <div className="w-[22px] transition-all ease-in-out duration-300 hover:opacity-100 opacity-50 aspect-square rounded-full overflow-hidden bg-red-600 flex items-center justify-center  text-white cursor-pointer">
            <RiDeleteBin5Line />
          </div>
        </div>
      </header>
      <div>
        {primarySubListItem.secondarySubList?.length ? (
          <div className="h-0 overflow-hidden">
            {primarySubListItem.secondarySubList?.map((item, index) => {
              return (
                <SecondarySubList key={index} seondarySubListItem={item} />
              );
            })}
          </div>
        ) : (
          <div>vvvv</div>
        )}
      </div>

    </div>
  );
};

// add new primary sub list
const AddNewPrimarySubList = props => {
  const { caseCategory } = props
  const [isAddNewPrimaryList, setIsAddNewPrimaryList] = useState(false)
  return (
    <div>
      {/* button */}
      <div>
        <div className="flex items-center gap-3 cursor-pointer border border-blue-700 text-blue-700 w-max p-1 py-[.105rem] rounded-sm transition-colors ease-in-out duration-300 hover:bg-blue-700 hover:text-white mt-1 select-none" id="iddd" onClick={() => {
          setIsAddNewPrimaryList(!isAddNewPrimaryList)
          console.log(window.getComputedStyle(document.getElementById('iddd')).height)
        }}>
          <span className="text-sm lowercase">add new {caseCategory.title} sub list</span>
          <AiOutlineClose className={`transition-transform ease-in-out duration-300 ${isAddNewPrimaryList ? 'rotate-0' : '-rotate-45'}`} />
        </div>
      </div>
      {/* input */}
      <div className={`overflow-hidden transition-all ease-in-out duration-300 ${isAddNewPrimaryList ? 'h-[92px]' : 'h-0'}`}>
        <div className="mt-1 p-2 rounded-sm bg-gray-200">
          <div className="bg-white rounded-sm overflow-hidden">
            <input className="focus:outline-none focus:ring-0 p-1 w-full bg-transparent border-none" type="text" placeholder="sub list title" />
          </div>
          <div className="mt-3 flex items-center gap-5">
            <button className="px-5 rounded-sm bg-blue-700 border transition-colors ease-in-out duration-300 hover:bg-blue-500 hover:border-blue-500 border-blue-700 text-white">save</button>
            <button className="px-5 border border-gray-400 text-gray-500 rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-700 hover:text-black">cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
// main case category item
const MainCaseCategoryItem = props => {
  let { caseCategory } = props;


  // states
  const [isEdit, setIsEdit] = useState(false)
  const [editMode, setEditMode] = useState('')
  const [isAddCaseDescription, setIsAddCaseDescription] = useState(false)
  const [isPrimarySubListExpanded, setIsPrimarySubListExpanded] = useState(false)

  console.log(caseCategory.primarySubList?.length)

  // sub list container height container
  const primarySubListContainerHeightContainer = (primaryListCount) => {
    console.log(primaryListCount)

    let height = 0 
    if (primaryListCount && isPrimarySubListExpanded){
      height = 37.3438 * primaryListCount + 25.3438
    }else {
      height = 25.3438
    }
    return 450
  
  }
  return (
    <div className="p-1 my-3 mx-1 border border-gray-100 rounded-sm">
      <header className="p-1 flex items-center justify-between gap-1">
        {/* left */}
        <div className="flex-grow flex items-center gap-1">
          <div className="w-[22px] aspect-square flex items-center justify-center rounded-full bg-green-500 overflow-hidden cursor-pointer text-white text-3xl" onClick={()=>{
            setIsPrimarySubListExpanded(!isPrimarySubListExpanded)
          }}>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex-grow">
            <div className={`border ${isEdit && editMode === 'TITLE' ? 'border-green-500' : 'border-transparent'}`}>
              <input className="p-1 focus:outline-none focus:ring-0 bg-transparent border-none w-full" type="text" value={caseCategory.title} disabled={isEdit && editMode === 'TITLE' ? false : true} />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="self-start flex items-center gap-1">
          <div>
            {
              isEdit && editMode === 'TITLE'
                ?
                <div className="w-[22px] aspect-square rounded-full overflow-hidden bg-green-500 flex items-center justify-center  text-white cursor-pointer" onClick={() => {
                  setIsEdit(false)
                  setEditMode('')
                }}>
                  <MdSave />
                </div>
                :
                <div className="w-[22px] transition-all ease-in-out duration-300 hover:opacity-100 opacity-50 aspect-square rounded-full overflow-hidden bg-green-500 flex items-center justify-center  text-white cursor-pointer" onClick={() => {
                  setIsEdit(true)
                  setEditMode('TITLE')
                }}>
                  <CiEdit />
                </div>
            }
          </div>
          <div className="w-[22px] transition-all ease-in-out duration-300 hover:opacity-100 opacity-50 aspect-square rounded-full overflow-hidden bg-red-600 flex items-center justify-center  text-white cursor-pointer">
            <RiDeleteBin5Line />
          </div>
        </div>
      </header>
      {
        caseCategory.description
          ?
          <div className="pl-8 mb-2">
            <div className="flex items-center gap-1">
              <div className="flex-grow">
                <div className={`border rounded-sm ${isEdit && editMode === 'DESCRIPTION' ? 'border-green-500' : 'border-gray-100'}`}>
                  <textarea className="w-full focus:outline-none focus:ring-0 border-none resize-none p-1 bg-transparent h-[104px]" name="case-description" value={caseCategory.description} disabled={isEdit && editMode === 'DESCRIPTION' ? false : true}></textarea>
                </div>
              </div>
              <div className="self-start flex items-center gap-1">
                <div>
                  {
                    isEdit && editMode === 'DESCRIPTION'
                      ?
                      <div className="w-[22px] aspect-square rounded-full overflow-hidden bg-green-500 flex items-center justify-center  text-white cursor-pointer" onClick={() => {
                        setIsEdit(false)
                        setEditMode('')
                      }}>
                        <MdSave />
                      </div>
                      :
                      <div className="w-[22px] transition-all ease-in-out duration-300 hover:opacity-100 opacity-50 aspect-square rounded-full overflow-hidden bg-green-500 flex items-center justify-center  text-white cursor-pointer" onClick={() => {
                        setIsEdit(true)
                        setEditMode('DESCRIPTION')
                      }}>
                        <CiEdit />
                      </div>
                  }
                </div>
                <div className="w-[22px] transition-all ease-in-out duration-300 hover:opacity-100 opacity-50 aspect-square rounded-full overflow-hidden bg-red-600 flex items-center justify-center  text-white cursor-pointer">
                  <RiDeleteBin5Line />
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            {/* add description btn */}
            <div className="pl-8 mb-2 mt-">
              <div className="flex items-center gap-3 cursor-pointer rounded-sm border border-blue-700 w-max px-1 py-[.075rem] text-sm text-blue-700 transition-colors ease-in-out duration-300 hover:bg-blue-700 hover:text-white" onClick={() => {
                setIsAddCaseDescription(!isAddCaseDescription)
              }}>
                <span>add case description</span>
                <AiOutlineClose className={`transition-transform ease-in-out duration-300 ${isAddCaseDescription ? 'rotate-0' : '-rotate-45'}`} />
              </div>
            </div>
            {/* input container */}
            <div className={`pl-6 overflow-hidden ease-in-out duration-300 ${isAddCaseDescription ? 'h-[88px]' : 'h-0'}`}>
              <div className="p-2 rounded-sm bg-gray-200">

                <div className="bg-white rounded-sm overflow-hidden flex items-center">
                  <textarea className="focus:outline-none focus:ring-0 m-0 resize-none border-none bg-transparent w-full p-1 h-[28px]" placeholder="case description ..." name="case-description" id="case-description"></textarea>
                </div>
                <div className="mt-3 flex items-center gap-5">
                  <button className="px-5 rounded-sm bg-blue-700 border transition-colors ease-in-out duration-300 hover:bg-blue-500 hover:border-blue-500 border-blue-700 text-white">save</button>
                  <button className="px-5 border border-gray-400 text-gray-500 rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-700 hover:text-black">cancel</button>
                </div>

              </div>
            </div>
          </div>
      }

      <div className={`pl-8 overflow-hidden transition-all ease-in-out duration-300 bg-red-600 h-[${primarySubListContainerHeightContainer(caseCategory?.primarySubList?.length)}px]`}>
        <div className="border border-gray-100 rounded-sm p-1 my-1">

          {caseCategory.primarySubList?.length ? (
            <div >
              <div >

                {caseCategory.primarySubList?.map((item, index) => {
                  return <PrimarySubListItem key={index} primarySubListItem={item}  />;
                })}
              </div>
            </div>
          ) : (
            <div>rrrr</div>
          )}
          {/* add new sub list */}
          <AddNewPrimarySubList caseCategory={caseCategory} />
        </div>

      </div>


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
      description: 'A corporation is a legal entity that is separate and distinct from its owners. Under the law, corporations possess many of the same rights and responsibilities as individuals. They can enter contracts, loan and borrow money, sue and be sued, hire employees, own assets, and pay taxes.',
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
      description: '',
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
