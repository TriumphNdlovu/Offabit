import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {Post} from "../Models/post";
import IPost from "@/components/Post/page";

export default async function Profile() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
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

        <button className=" flex justify-end ">
          Post Offer
        </button>

      </div>

      <div className="flex justify-between bg-blue-500 w-screen p-3:">
      </div>
        <h1 className="text-xl flex justify-start" >My Offers</h1>

        <div className="grid grid-cols-4 gap-4 w-full p-5">
          {MyOffers.map((post: Post) => {
            return (
              <IPost key={post.id} post={post} />
            );
          })}
        </div>

   

    </div>
  );
}
