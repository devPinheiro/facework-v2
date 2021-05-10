import axios from '../../store/Axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from '../../components/Moment'

const NotificationItem = ({ created_at, data, read_at, id, type }) => {
  const dispatch = useDispatch();

  const markAsRead = async id => {
    await axios.put(`/notifications/read/${id}`);
  }
  return (
    <div className={`block border-grey-lightest px-2 py-2 hover:bg-grey-lightest ${read_at ? '' : 'bg-grey-lightest'}`}>
      { type.endsWith("NewChatMessage") 
      ? <div className="flex justify-between">
            <Link to={`/messages/${data.sender.chat_id}`} className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
            <img class="rounded-full h-10 w-10 object-cover border-grey-lightest border mr-3" src={data.sender.image} alt="" />
            <div className="flex-column ">
              <div>
                <p className="text-xs text-black">{`${data.sender.name} sent a new message:`}</p><p className="text-xs text-black">{`${data.message}`}</p>
              </div>
              <small className="text-xxs py-1 text-grey-light">
                <Moment time={created_at} />
              </small>
            </div>

          </Link>
          <div className="px-4 pr-2 flex">
            <img class="h-12 w-16" src={data.sender.image} alt="" />
          </div>
        </div>
        :
        <div className="flex justify-between"> 
          <Link to={`/feeds/p/${data.post_id}/${data.post_title.toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')}`} onClick={() => markAsRead(id)} className="flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg">
          <img class="rounded-full h-10 w-10 object-cover border-grey-lightest border mr-3" src={data.post_author_avatar} alt="" />
          <div className="flex-column ">
            <div>
              <p className="text-xs text-black">{`${data.post_author} shared a new post:`}</p><p className="text-xs text-black">{`${data.post_title}`}</p>
            </div>
            <small className="text-xxs py-1 text-grey-light">
              <Moment time={created_at} />
            </small>
          </div>

        </Link> 
          <div className="px-4 pr-2 flex">
            <img class="h-12 w-16" src={data.post_image} alt="" />
          </div>
        </div>
      }
    </div>
  )
}

export default NotificationItem
