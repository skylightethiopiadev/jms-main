import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiChat2 } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";


const CustomersDashboardMyChartClosedCaseIndex = () => {

    const [isLawyerImagePopUp, setIsLawyerImagePopUp] = useState(false)
    return (
        <div className='overflow-x-hidden flex-grow bg-red-400'>
            closed cases
        </div>
    )
}

export default CustomersDashboardMyChartClosedCaseIndex
