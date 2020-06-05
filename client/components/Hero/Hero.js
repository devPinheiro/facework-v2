import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@components/Button'

const Hero = () => (
    <>
        <div className="w-full h-64 flex items-center justify-center">
            <h1 className="text-xl text-center mx-5 lg:text-5xl font-bold">
                FULLSTACK-JS MERN STARTER
            </h1>
        </div>
        <div className="w-full justify-center items-center">
            <Link to="/auth/login" className="mb-4">
                <Button>Login</Button>
            </Link>
            <Link to="/auth/register">
                <Button>Register</Button>
            </Link>
        </div>
    </>
)

export default Hero
