import { FaPhone } from 'react-icons/fa6';
import { Post } from '../../app/Models/post'
import { FaCalendar, FaToolbox } from 'react-icons/fa';

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
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
            </img>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
        </div>
        
    );
}