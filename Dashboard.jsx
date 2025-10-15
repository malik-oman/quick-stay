import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title
        align='left'
        font='outfit'
        title='Dashboard'
        subTitle='Monitor your room listings, track bookings and analyze revenue — all in one place. Stay updated with real-time insights to ensure smooth operations.'
      />

      {/* Stats Cards */}
      <div className='flex flex-wrap gap-4 my-8'>
        {/* Total Bookings */}
        <div className='bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4 flex-1 min-w-[200px]'>
          <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Booking</p>
            <p className='text-neutral-700 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className='bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4 flex-1 min-w-[200px]'>
          <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-700 text-base'>${dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Booking</h2>
      <div className='w-full max-w-4xl text-left border border-gray-300 rounded-lg overflow-hidden'>
        <table className='w-full border-collapse'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className='border-t border-gray-200 hover:bg-gray-50'>
                <td className='py-3 px-4 text-gray-700'>Malik Oman</td>
                <td className='py-3 px-4 text-gray-700 max-sm:hidden'>{item.room.roomType}</td>
                <td className='py-3 px-4 text-gray-700 text-center'>${item.totalPrice}</td>
                <td className='py-3 px-4 text-center'>
                  <span
                    className={`py-1 px-3 text-xs rounded-full ${
                      item.isPaid
                        ? 'bg-green-200 text-green-700'
                        : 'bg-amber-200 text-yellow-700'
                    }`}
                  >
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
