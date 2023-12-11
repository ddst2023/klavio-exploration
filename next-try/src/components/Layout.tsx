"use client";
import {  PropsWithChildren, useState } from "react";
import Link from 'next/link'

import { BeakerIcon } from '@heroicons/react/24/solid'


const Layout = ({children}: PropsWithChildren) => {
              
  return (
    <div className="min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className=" flex flex-col top-0 left-0 w-72 bg-white h-screen border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div>Klavio Exploration</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
  
            <li>
              <Link
                href="/customer-profiles"
                className="relative flex flex-row items-center h-8 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-2">
                <BeakerIcon className="w-5 h-5" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                 Customer Profile
                </span>
              </Link>
            </li>
 
           
          </ul>
        </div>
      </div>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-12 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">{children}</div>
    </div>
  );
};

export default Layout;
