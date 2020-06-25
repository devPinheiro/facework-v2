import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@components/Button'

const Hero = () => (
    <div className="w-full h-64 justify-center pt-20">
        <div className="block">
            <h1 className="text-xl text-center text-black mx-5 lg:text-5xl font-bold">
                Welcome to Facework
            </h1>
        </div>
        <div className="block">
            <h4 className="text-sm text-grey-dark pt-4  mx-5 text-center">
                We&apos;re currently under construction
            </h4>
        </div>
    </div>
)

export default Hero
