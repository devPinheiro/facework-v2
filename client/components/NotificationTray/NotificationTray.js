import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotificationsRequest } from '../../store/actions/notification';

// components
import NotificationItem from '../NotificationListItem'

// fixtures
import data from "./fixtures"



const NotificationTray = ({ openNotification }) => {
    // useState
    const dispatch = useDispatch();
    const [notification, setNotification] = useState([]);
    const [page, setPage] = useState(2);
    const [isLoading, setIsLoading] = useState(true);

    // useSelectors
    const notificationState = useSelector(s => s.notifications);


    // useEffects
    useEffect(() => {
        if (openNotification) {
            dispatch(fetchNotificationsRequest());
        }
    }, [openNotification]);

    useEffect(() => {
        console.log(notificationState)
        if (notificationState.isSuccessful) {
            if (notificationState.currentPage > 1 && notificationState.lastPage) {
                setNotification(prevState => [...prevState, ...notificationState.data])
            } else {
                setNotification(notificationState.data);
            }
            setIsLoading(false);
        }

    }, [notificationState])

    // functions
    const loadMoreNotifications = () => {
        setPage(page + 1);
        dispatch(fetchNotificationsRequest(page));
    }

    return (

        <div className={`${openNotification ? "w-80 h-99 flex flex-col bg-fixed bg-white shadow-md border-grey-lightest rounded-md z-50 fixed top-20" : "hidden"}`}>
            <div className="bg-grey-lighter font-sans rounded-tr-md rounded-tl-md h-auto px-2 py-4 text-xxs font-medium text-black">{`You have ${notification.length} unread notifications`}</div>
            <div className="flex flex-grow flex-col overflow-scroll scrolling-auto">
                {notification && notification.map((item, key) => (
                    <NotificationItem key={key} {...item} />
                ))}
            </div>

        </div>

    )
}

export default NotificationTray
