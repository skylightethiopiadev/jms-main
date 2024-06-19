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
        <div className='w-screen overflow-x-hidden overflow-y-auto text-[1.05rem]'>
            <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                <div ref={topReference} />
                <Outlet />
                <div className='my-10 text-[.875rem]'>
                    <div className='grid gap-7 grid-cols-5'>
                        <NavLink to={'/family'} style={activeLinkStyle} className={'cursor-default shadow-xl p-1 rounded-md'} onClick={() => {
                            scrollToTopHandler()
                        }}>
                            <div className='p-3'>
                                <div>
                                    <h3 className='header-level-4'>Maintenance</h3>
                                </div>
                                <div>
                                    <p>
                                        maintenance consectetur adipisicing elit. Aliquid
                                    </p>
                                </div>
                                <div className='flex items-center my-2 '>
                                    <div className='flex items-center px-3 py-1 border  border-blue-900 rounded-full  gap-1 cursor-pointer text-blue-900 transition-colors ease-in-out duration-300 hover:bg-blue-900 hover:text-white' >
                                        <div>view more</div>
                                        <MdArrowRightAlt className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink to={'/family/divorce'} style={activeLinkStyle} className={'cursor-default shadow-xl p-1 rounded-md'} onClick={() => {
                            scrollToTopHandler()
                        }}>
                            <div className='p-3'>
                                <div>
                                    <h3 className='header-level-4'>Divorce</h3>
                                </div>
                                <div>
                                    <p>
                                        maintenance consectetur adipisicing elit. Aliquid
                                    </p>
                                </div>
                                <div className='flex items-center my-2 '>
                                    <div className='flex items-center px-3 py-1 border  border-blue-900 rounded-full  gap-1 cursor-pointer text-blue-900 transition-colors ease-in-out duration-300 hover:bg-blue-900 hover:text-white'>
                                        <div>view more</div>
                                        <MdArrowRightAlt className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={'/family/irregular-union'} style={activeLinkStyle} className={'cursor-default shadow-xl p-1 rounded-md'} onClick={() => {
                            scrollToTopHandler()
                        }}>
                            <div className='p-3'>
                                <div>
                                    <h3 className='header-level-4'>Irregular Union</h3>
                                </div>
                                <div>
                                    <p>
                                        maintenance consectetur adipisicing elit. Aliquid
                                    </p>
                                </div>
                                <div className='flex items-center my-2 '>
                                    <div className='flex items-center px-3 py-1 border  border-blue-900 rounded-full  gap-1 cursor-pointer text-blue-900 transition-colors ease-in-out duration-300 hover:bg-blue-900 hover:text-white'>
                                        <div>view more</div>
                                        <MdArrowRightAlt className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={'/family/adoption'} style={activeLinkStyle} className={'cursor-default shadow-xl p-1 rounded-md'} onClick={() => {
                            scrollToTopHandler()
                        }}>
                            <div className='p-3'>
                                <div>
                                    <h3 className='header-level-4'>Adoption</h3>
                                </div>
                                <div>
                                    <p>
                                        maintenance consectetur adipisicing elit. Aliquid
                                    </p>
                                </div>
                                <div className='flex items-center my-2 '>
                                    <div className='flex items-center px-3 py-1 border  border-blue-900 rounded-full  gap-1 cursor-pointer text-blue-900 transition-colors ease-in-out duration-300 hover:bg-blue-900 hover:text-white'>
                                        <div>view more</div>
                                        <MdArrowRightAlt className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={'/family/others'} style={activeLinkStyle} className={'cursor-default shadow-xl p-1 rounded-md'} onClick={() => {
                            scrollToTopHandler()
                        }}>
                            <div className='p-3'>
                                <div>
                                    <h3 className='header-level-4'>Others</h3>
                                </div>
                                <div>
                                    <p>
                                        maintenance consectetur adipisicing elit. Aliquid
                                    </p>
                                </div>
                                <div className='flex items-center my-2 '>
                                    <div className='flex items-center px-3 py-1 border  border-blue-900 rounded-full  gap-1 cursor-pointer text-blue-900 transition-colors ease-in-out duration-300 hover:bg-blue-900 hover:text-white'>
                                        <div>view more</div>
                                        <MdArrowRightAlt className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CivilFamily
