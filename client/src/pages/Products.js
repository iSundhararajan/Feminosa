import React from 'react'
import PadsImg from "../assets/pads.jpg"
import PeriodCups from "../assets/period cups.jpg"
import SanitaryNapkins from "../assets/sanitary napkins.jpg"
import TamponsImg from "../assets/tampons.jpg"

export default function Products() {
    return (
        <div>
            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-bold">Products</h1>
                <div className='bg-blue-500 h-1 w-40 my-2 rounded-lg'></div>
            </div>

            <div className="flex flex-wrap justify-around w-full px-16">

                <div className="m-8">
                    <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
                        <img src={PadsImg} height="400" width="400" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                            >
                                Buy this product
                            </button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
                        <img src={PeriodCups} height="400" width="400" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                            >
                                Buy this product
                            </button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
                        <img src={SanitaryNapkins} height="400" width="400" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                            >
                                Buy this product
                            </button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
                        <img src={TamponsImg} height="400" width="400" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                            >
                                Buy this product
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
