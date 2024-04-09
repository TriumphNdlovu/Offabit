import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {Post} from "../Models/post";
import IPost from "@/components/Post/page";
import TheButton from "@/components/Button/Page";

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
      <div className="flex justify-between bg-blue-500 w-screen p-3:">
        <h1 className="text-xl flex justify-start" >Profile</h1>
        
        <div>
          Welcome, {user.email}
        </div>


      </div>

        <h1 className="text-xl flex justify-start" >My Offers</h1>

        <div className="grid grid-cols-4 gap-4 w-full p-5">
          {MyOffers.map((post: Post) => {
            

            return (
              <div>
                <IPost key={post.id} post={post} />
                <TheButton id={post.id} action="edit" />
                <TheButton id={post.id} action="delete" />

                {/* <button onClick={() => handleEdit(post.id)}>Edit</button>
                <button onClick={() => handleDelete(post.id)}>Delete</button> */}
              </div>              
      
            );
          })}
        </div>


        
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

        <TheButton id={0} action={"postbutton"}/>
       <button
        className="
        fixed right-4 bottom-4 bg-blue-500 
        text-white w-12 h-12 rounded-full flex 
        items-center justify-center shadow-lg"
        >
          heeeeeeeeeey
        </button>
   

    </div>
  );
}
