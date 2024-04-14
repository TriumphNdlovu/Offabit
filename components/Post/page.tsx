import { FaMapPin, FaPhone } from 'react-icons/fa6';
import { Post } from '../../app/Models/post'
import { FaCalendar, FaEye, FaHandHolding, FaToolbox } from 'react-icons/fa';
import Link from 'next/link';

interface IPostProps {
    post: Post;
}

export default function IPost({post}: IPostProps) {
    return (

        // <div key={post.id} className="bg-[#112D32] p-4 shadow-md rounded">
        //     <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            
        //     <div className="p-4">
        //         <h2 className="text-xl font-bold text-white">{post.title}</h2>
        //         <div className="flex">
        //             <p className="text-lg text-green-600">R{post.price}</p> 
        //             <p className="text-sm text-blue-900 pl-1">{post.status}</p>
        //         </div>
        //         <p className="text-sm text-white">Description</p>
                
        //         <div className="text-white border border-white">
        //             <p className="text-xs p-2">{post.description}</p>
        //         </div>

        //         <div className='flex pt-1 text-white'>
        //             <FaPhone/> 
        //             <p className="text-sm text-white pl-2">{post.contact}</p>
        //         </div>

        //         <div className='flex pt-1 text-white'>
        //             <FaToolbox/>
        //             <p className="text-sm text-white pl-2">{post.condition}</p>
        //         </div>

        //         <div className='flex pt-1 text-white'>
        //             <FaCalendar/>
        //             <p className="text-sm text-white pl-2">{post.postedAt}</p>
        //         </div>
                
        // </div>
        // </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden hover:border-gray-500">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image} alt="Product Image" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{post.category}</h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">{post.title}</h1>
                      <p className="leading-relaxed mb-3">{post.description}</p>

                      <div className=' text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800'>
                        <FaMapPin/>
                        <h3 className="text-xs font-medium text-gray-500 mb-1"> {post.location}</h3>
                      </div>

                      <div className=' text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800'>
                        <FaHandHolding/>
                        <h3 className="text-xs font-medium text-gray-500 mb-1"> {post.negotiable ? "Negotiable" : "Not Negotiable"}</h3>
                      </div>

                      <div className="flex items-center justify-between flex-wrap">
                        <div className="w-1/2 p-2">
                          <div className="tracking-widest  title-font p-2 text-white font-bold  rounded border-2 border-green-600">
                            R{post.price}</div>
                          </div>
                     
                          <Link href="/ViewOffer" className="w-1/2 p-2 ">
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
