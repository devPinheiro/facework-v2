import React from 'react'

function Footer() {
    return (
        <div className="bg-blue-darkest">
        <div className="h-full mb-10 flex justify-center">
           <div className="text-white flex flex-row">
               <div className="mr-5">Facebook</div>
               <div className="mr-5">Instagram</div>
               <div className="mr-5">Twitter</div>
               <div className="mr-5">LinkedIn</div>
           </div>
        </div>
        <div className="flex flex-column text-white justify-center">Copyright. &copy; Facework. All Rights Reserved. 2020</div>
        </div>
    )
}

export default Footer
