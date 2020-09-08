import React from 'react'
import { CardList } from '../../components/JobCard/CardList'
import './styles.css'

const Jobs = () => {
    return (
        <div className="w-full m-auto max-w-2xl flex">
            <CardList />
        </div>
    )
}

export default Jobs
