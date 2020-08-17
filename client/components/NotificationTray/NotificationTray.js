import React from 'react'

// components
import NotificationItem from '../NotificationListItem'

// fixtures
import data from "./fixtures"



const NotificationTray = ({ openNotification }) => {
    return (
        
        <div className={`${ openNotification ? "w-80 h-99 flex flex-col bg-fixed bg-white shadow-md border-grey-lightest rounded-md z-50 fixed top-20" : "hidden" }`}>
            <div className="bg-grey-lighter rounded-tr-md rounded-tl-md h-auto px-2 py-4 text-xxs font-hairline text-black">You have 10 unread notifications</div>
            <div className="flex flex-grow flex-col overflow-scroll scrolling-auto">
               {data.map((item, key) => (
                   <NotificationItem key={key} {...item} />
               ))}
            </div>
           
        </div>
       
    )
}

export default NotificationTray
