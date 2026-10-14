import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-white flex justify-between w-[80vw] fixed top-10 right-[10vw] rounded-full p-3 px-3 pl-8 mb-7'>
            <div className="logo flex items-center">
                <img src="/bittree.svg" alt="bittree logo" width={150} />

                <ul className='gap-7 xl:flex hidden'>
                    <Link href="/"><li>Products</li></Link>
                    <Link href="/"><li>Templates</li></Link>
                    <Link href="/"><li>Marketplace</li></Link>
                    <Link href="/"><li>Learn</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                </ul>
            </div>

            <div className="hidden md:flex gap-2">
                <button className="login bg-gray-200 rounded-lg px-4 py-3 ">Log in</button>
                <button className="signup bg-gray-800 text-white p-4 rounded-full">Signup up free</button>
            </div>
        </nav>
    )
}

export default Navbar
