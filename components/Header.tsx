'use client';

import Link from "next/link";
import { FaPhone, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-opacity-90 bg-[#112D32] h-14 w-full sticky">
        <div className="flex justify-between items-center h-full pr-20">
            <div className=" items-center animate-jump-in animate-infinite">
                <Link href="/" className="">
                    {/* <img src="/images/logo.svg" className="h-8" alt="OfferBit" /> */}
                    <span className="text-lg font-bold ml-2 text-white">OfferBit</span>
                </Link>
            </div>
            {/* Categories */}
            <div className="flex items-center">
                <Link href="/Electronics">
                    <div className="text-white rounded hover:underline flex justify-between">
                        {/* <FaPhone size={15} /> */}
                        <div className="pl-3">
                            Electronics
                        </div>
                    </div>
                </Link>
                <Link href="/vehicles">
                    <div className="text-white rounded hover:underline flex justify-between">
                        {/* <FaPhone size={15} /> */}
                        <div className="pl-3">
                            Vehicles
                        </div>
                    </div>
                </Link>
                <Link href="/furniture">
                    <div className="text-white rounded hover:underline flex justify-between">
                        {/* <FaPhone size={15} /> */}
                        <div className="pl-3">
                            Furniture
                        </div>
                    </div>
                </Link>
                <Link href="/clothing">
                    <div className="text-white rounded hover:underline flex justify-between">
                        {/* <FaPhone size={15} /> */}
                        <div className="pl-3">
                            Clothing
                        </div>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="text-white rounded hover:underline flex justify-between">
                        {/* <FaPhone size={15} /> */}
                        <div className="pl-3">
                            Services
                        </div>
                    </div>
                </Link>
                <Link href="/Other">
                    <div className="text-white rounded hover:underline flex justify-between">
                        {/* <FaPhone size={15} /> */}
                        <div className="pl-3">
                            Other
                        </div>
                    </div>
                </Link>

         

            </div>




            <div className="flex items-center">
                <Link href="/profile">
                            <div className="text-white rounded hover:border flex justify-between">
                        <FaUserCircle size={24} />
                        <div className="pl-2">
                            Profile 
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
}