import React from 'react'

export default function Sos() {
    return (
        <div>

            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-bold">SoS</h1>
                <div className='bg-blue-500 h-1 w-20 my-2 rounded-lg'></div>
            </div>

            <div className='text-center text-3xl italic'>Your safety matters too</div>

            <div className='pl-16'>
                <h1 className='text-2xl py-2'>Follow these tips to stay safe:</h1>
                <ul className="text-2xl">
                    <li className="list-disc">Avoid walking alone in the dark</li>
                    <li className="list-disc">Scan the area and be aware of your surroundings</li>
                    <li className="list-disc">Always carry your phone with you</li>
                    <li className="list-disc">Tell someone else about your plans</li>
                    <li className="list-disc">Escape is the best option</li>
                </ul>
            </div>

            <div className='grid place-items-center pt-12'>

                <p className='text-2xl'>If you need immediate help, please click on the SOS button here!</p>

                <button className='bg-[#e11e1e] text-white py-2 px-8 rounded-md text-2xl italic md:text-2xl my-4'>SOS</button>

            </div>

        </div>
    )
}
