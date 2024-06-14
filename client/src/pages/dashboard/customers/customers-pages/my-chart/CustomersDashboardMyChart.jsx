import React from 'react'
import {Outlet} from 'react-router-dom'

// components
import MyChartRightSideQuickLink from './my-chart-components/MyChartRightSideQuickLink'
import MyChartFooter from './my-chart-components/MyChartFooter'

const CustomersDashboardMyChart = () => {
  return (
    <div className='flex-grow flex'>
      <div className='flex-grow flex gap-5'>
        {/* left-bottom */}
        <div className='w-[75%] flex flex-col bg-gray-100 gap-5'>
          <div className='flex-grow bg-green-400'>
            <Outlet />
          </div>
          <div>
            <MyChartFooter />
          </div>
        </div>
        {/* right-top */}
        <div className='w-[25%] bg-gray-100 flex p-3'>
          <MyChartRightSideQuickLink />
        </div>
      </div>
    </div>
  )
}

export default CustomersDashboardMyChart
