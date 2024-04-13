import { Post } from "@/app/Models/post";
// import {addPostService} from "@/Services/postService";
import { useEffect } from "react";
import dynamic from 'next/dynamic';

const DynamicMyForm = dynamic(() => import('../../../components/AddPost/Page'), { ssr: false });

export default async function Addpost() {

  // async function handleSubmit(event:any) {
  //       event.preventDefault();
  //       const form = event.currentTarget;
  //       const newpost :Post = {
  //           id: 1,
  //           title: form.Title.value,
  //           description: form.Description.value,
  //           saleType: form.Rentable.value ? "Rent" : "Sell",
  //           price: form.Price.value,
  //           image: "https://images.unsplash.com/photo-1584138139844-6f3e7f7e5f3d",
  //           location: form.Location.value,
  //           contact: form.phone.value,
  //           category: form.Category.value,
  //           status: "Available",
  //           negotiable: form.Negotiable.value ? true : false,
  //           condition: form.Condition.value,
  //           delivery: true,
  //           deliveryFee: form.Delivaryfee.value,
  //           postedAt: Date.now().toString(),
  //       };
        
  //       // addPostService(newpost);
  //   }

    


    return (
        <div className="text-gray-400 bg-gray-900 body-font">

             <h1 className="title-font sm:text-4xl text-3xl text-center mb-2 font-medium text-white py-5">Add New Offer</h1>
           

            <div className="flex  w-screen px-5 justify-center">
              <DynamicMyForm />
            </div>
</div>
           
    );
}