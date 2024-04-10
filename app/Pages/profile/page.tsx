import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {Post} from "../../Models/post";
import IPost from "@/components/Post/page";
import TheButton from "@/components/Button/Page";
import { FaUpload } from "react-icons/fa";
import Link from "next/link";

export default async function Profile() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  function handleDelete(id: number): void {
    throw new Error("Function not implemented.");
  }
  function handleEdit(id: number): void {
    throw new Error("Function not implemented.");
  }

  // fill with mochdata
  const MyOffers: Post[] = [
    {
      id: 1,
      title: "Macbook Pro 2020",
      description: "Brand new Macbook Pro 2020",
      saleType: "Sell",
      price: 2000,
      image: "https://images.unsplash.com/photo-1584138139844-6f3e7f7e5f3d",
      location: "Lagos",
      postedAt: "2022-02-02",
      contact: "08012345678",
      category: "Electronics",
      status: "Available",
      negotiable: true,
      condition: "New",
      delivery: true,
      deliveryFee: 1000,
    },
    {
      id: 2,
      title: "Macbook Pro 2020",
      description: "Brand new Macbook Pro 2020",
      saleType: "Sell",
      price: 2000,
      image: "https://images.unsplash.com/photo-1584138139844-6f3e7f7e5f3d",
      location: "Lagos",
      postedAt: "2022-02-02",
      contact: "08012345678",
      category: "Electronics",
      status: "Available",
      negotiable: true,
      condition: "New",
      delivery: true,
      deliveryFee: 1000,
    },
    {
      id: 3,
      title: "Macbook Pro 2020",
      description: "Brand new Macbook Pro 2020",
      saleType: "Sell",
      price: 2000,
      image: "https://images.unsplash.com/photo-1584138139844-6f3e7f7e5f3d",
      location: "Lagos",
      postedAt: "2022-02-02",
      contact: "08012345678",
      category: "Electronics",
      status: "Available",
      negotiable: true,
      condition: "New",
      delivery: true,
      deliveryFee: 1000,
    },
    
];

  return (
    <div>
          <div className="flex justify-between bg-blue-500 w-screen px-5">
            <h1 className="text-xl flex justify-start" >Profile</h1>
            
            <div>
              Welcome, {user.email}
            </div>
          </div>
            
            <div className="text-gray-400 bg-gray-900 body-font">
          <div className="flex justify-between w-screen px-5">
            <h1 className="title-font sm:text-4xl text-3xl text-center mb-2 font-medium text-white py-5">Your Offers</h1>
            
            <div className="py-5">
              <Link href="/addpost">
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
                        {MyOffers.map((post: Post) => {
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
