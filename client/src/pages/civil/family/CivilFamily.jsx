import { useRef } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

// icons
import { MdArrowRightAlt } from "react-icons/md";

const CivilFamily = () => {

    // top reference
    const topReference = useRef(null)

    // active link style
    const activeLinkStyle = ({ isActive }) => {
        return {
            background: isActive ? '#f5f5f5' : 'white'
        }
    }

    // scroll to top handler
    const scrollToTopHandler = () => {
        topReference?.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <div className="text-[1.075rem]">
        <Outlet />
      </div>
    );
}

export default CivilFamily
