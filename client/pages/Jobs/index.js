import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../../components/JobCard/CardList'
import { fetchJobsRequest } from '../../store/actions/fetch-all-jobs';
import './styles.css'



const Jobs = () => {
    return (
        <div className="w-full m-auto max-w-2xl flex">
            <CardList />
        </div>
    )
}

export default Jobs
