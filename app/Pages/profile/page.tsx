'use client'
import {Post} from "../../Models/post";
import IPost from "@/components/Post/page";
import { FaUpload } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPostsService } from "@/Services/postService";

export default function Profile() {
  let [myOffers, setMyOffers] = useState<Post[]>([]);
  
  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   return redirect("/login");
  // }


  useEffect(() => {
    getPostsService().then((posts: Post[]) => {
      console.log(posts);
      setMyOffers(posts);
    });
  }, []);

  return (
    <div>
          <div className="flex justify-between bg-blue-500 w-screen px-5">
            <h1 className="text-xl flex justify-start" >Profile</h1>
            
            <div>
              Welcome, Will deal with this later
              {/* Welcome, {user.email} */}
            </div>
          </div>
            
            <div className="text-gray-400 bg-gray-900 body-font">
          <div className="flex justify-between w-screen px-5">
            <h1 className="title-font sm:text-4xl text-3xl text-center mb-2 font-medium text-white py-5">Your Offers</h1>
            
            <div className="py-5">
              <Link href="/Pages/add-post">
                <button type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                                                  focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                                                  text-sm px-5 py-2.5 text-center inline-flex items-center me-2 
                                                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                  >
                  <FaUpload className="w-5 h-5 me-2" />
                  Post Offer
                </button>
              </Link>
            </div>
          </div>
          
              <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {myOffers.map((post: Post) => {
                          return (
                                    <IPost key={post.id} post={post} />
                                  );
                        })}
                    </div>              
              </div>              
            </div>
    </div>
  );
}
