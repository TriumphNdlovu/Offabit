'use client'
import { FaMapPin, FaPhone } from 'react-icons/fa6';
import { Post } from '../../app/Models/post'
import {  FaEye, FaHandHolding } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect } from 'react';

interface IPostProps {
    post: Post;
}

export default function IPost({post}: IPostProps) {

  useEffect (() => 
    {
 
    },[post]);
    
    return (
testing git in lazyvim
      one last config testing
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden hover:border-gray-500">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image} alt="Product Image" />
                    <div className="p-6">
                      {/* //profile avatar */}
                      {/* profile name */}
                      <h1 className="">
                        <img className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center" src={
                          post.user.avatar} alt="avatar" />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-white">{post.user.name}</span>
                        </span>
                      </h1>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{post.category}</h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">{post.title}</h1>
                      <p className="leading-relaxed mb-3">{post.description}</p>

                      <div className=' text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800'>
                        <FaMapPin/>
                        <h3 className="text-xs font-medium text-gray-500 mb-1"> {post.location}</h3>
                        <FaHandHolding/>
                        <h3 className="text-xs font-medium text-gray-500 mb-1"> {post.negotiable ? "Negotiable" : "Not Negotiable"}</h3>
                      </div>

                      <div className="flex items-center justify-between flex-wrap">
                        <div className="w-1/2 p-2">
                          <div className="tracking-widest  title-font p-2 text-white font-bold  rounded border-2 border-green-600">
                            R{post.price}</div>
                          </div>
                     
                          <Link href={`../Pages/viewOffer?${post.PostId}`} className="w-1/2 p-2 ">
                            <button className='border-2 rounded w-full flex items-center flex-wrap hover:text-white hover:border-gray-500'>
                              <div className='pl-2'>
                                <FaEye/>
                              </div>
                              <div className='p-2'>
                                View Offer
                              </div>
                            </button>
                          </Link>
                      </div>
                    </div>
                  </div>
                    
                  
                </div>
              );
          }
