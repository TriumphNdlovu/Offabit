import { FaPhone } from 'react-icons/fa6';
import { Post } from '../../app/Models/post'
import { FaCalendar, FaToolbox } from 'react-icons/fa';

interface IPostProps {
    post: Post;
}

export default function IPost({post}: IPostProps) {
    return (
        <div key={post.id} className="bg-[#112D32] p-4 shadow-md rounded">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-white">{post.title}</h2>
                <div className="flex">
                    <p className="text-lg text-green-600">R{post.price}</p> 
                    <p className="text-sm text-blue-900 pl-1">{post.status}</p>
                </div>
                <p className="text-sm text-white">Description</p>
                
                <div className="text-white border border-white">
                    <p className="text-xs p-2">{post.description}</p>
                </div>

                <div className='flex pt-1 text-white'>
                    <FaPhone/> 
                    <p className="text-sm text-white pl-2">{post.contact}</p>
                </div>

                <div className='flex pt-1 text-white'>
                    <FaToolbox/>
                    <p className="text-sm text-white pl-2">{post.condition}</p>
                </div>

                <div className='flex pt-1 text-white'>
                    <FaCalendar/>
                    <p className="text-sm text-white pl-2">{post.postedAt}</p>
                </div>
                

          
        </div>
        </div>
    );
}