import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className='md:mx-28 mx-4 py-10'>

      <div className='md:grid md:grid-cols-2 items-center'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Who we are</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>At Feminosa, we believer that every women should have euqal access to feminine hygeine products. However, many women especially in rural areas do not have access to these products. This leads to many health issues such as infections, etc. We hope to help women find the products they need.</p>

          <Link to="/products">
            <button className='bg-[#6F5DE0] text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Find Products</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="450" height="450" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={FeatImg} alt="img" width="250" height="250" />
        </div>
        <div className=''>
          <h1 className='text-5xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>Feminosa is a web app where you can:
          </p>
          <ul className="text-2xl">
            <li className="list-disc">Find the products you are looking for.</li>
            <li className="list-disc">Chat with others in public chatrooms.</li>
            <li className="list-disc">Send an SoS when in danger.</li>
            <li className="list-disc">Donate for noble cause.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}