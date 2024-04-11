'use client'
import { Post } from "@/app/Models/post";
import {addPost} from "@/app/Services/postService";

export default async function Addpost() {

    function handleSubmit(event:any) {
        event.preventDefault();
        const form = event.currentTarget;
        const newpost :Post = {
            id: 1,
            title: form.Title.value,
            description: form.Description.value,
            saleType: form.Rentable.value ? "Rent" : "Sell",
            price: form.Price.value,
            image: "https://images.unsplash.com/photo-1584138139844-6f3e7f7e5f3d",
            location: form.Location.value,
            contact: form.phone.value,
            category: form.Category.value,
            status: "Available",
            negotiable: form.Negotiable.value ? true : false,
            condition: form.Condition.value,
            delivery: true,
            deliveryFee: form.Delivaryfee.value,
            postedAt: Date.now().toString(),
        };
        addPost(newpost);
    }



    return (
        <div className="text-gray-400 bg-gray-900 body-font">

             <h1 className="title-font sm:text-4xl text-3xl text-center mb-2 font-medium text-white py-5">Add New Offer</h1>
           

            <div className="flex  w-screen px-5 justify-center">
                
<form className="flex px-5 border flex-col" onSubmit={handleSubmit}>
<div className="p-5">
  <div className="flex items-center justify-center w-full">
    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </div>
      <input id="Picture" name="Picture" type="file" className="hidden" />
    </label>
  </div>
<div className="grid gap-6 mb-6 md:grid-cols-2 text-white py-5">

  <div className="flex flex-col">
    <label htmlFor="Title" className="block mb-2 text-sm font-medium dark:text-white">Title</label>
    <input type="text" id="Title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
  </div>
  
  <div className="flex flex-col">
    <label htmlFor="Price" className="block mb-2 text-sm font-medium dark:text-white">Price</label>
    <div className="flex items-center">
      <input type="number" id="Price" className="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter amount" required />
      <button id="dropdown-currency-button" data-dropdown-toggle="dropdown-currency" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        ZAR
      </button>
    </div>
  </div>

  <div className="flex flex-col">
    <label htmlFor="Description" className="block mb-2 text-sm font-medium dark:text-white">Description</label>
    <textarea id="Description" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe your product" required />
  </div>

  <div className="flex flex-col">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white">Phone number</label>
    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
  </div>

  <div className="flex flex-col">
    <label htmlFor="Location" className="block mb-2 text-sm font-medium dark:text-white">Location</label>
    <input type="text" id="Location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Located in..." required />
  </div>

  <div className="flex flex-col">
    <label htmlFor="Delivaryfee" className="block mb-2 text-sm font-medium dark:text-white">Delivery fee</label>
    <div className="flex items-center">
      <input type="number" id="Delivaryfee" className="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter amount" required />
      <button id="dropdown-currency-button" data-dropdown-toggle="dropdown-currency" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        ZAR
      </button>
    </div>
  </div>

  <div className="flex flex-col">
    <label htmlFor="Category" className="block mb-2 text-sm font-medium dark:text-white">Category</label>
    <select id="Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Select Item Category</option>
      <option>Electronics</option>
      <option>Home & Garden</option>
      <option>Books</option>
      <option>Automotive</option>
      <option>Services</option>
      <option>Other</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label htmlFor="Condition" className="block mb-2 text-sm font-medium dark:text-white">Condition</label>
    <select id="Condition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Select Condition</option>
      <option>New</option>
      <option>Used</option>
    </select>
  </div>
</div>

<div className="grid gap-6 mb-6 md:grid-cols-2 text-white py-5">

  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="Rentable" type="checkbox" value="" name="Rentable" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="Rentable" className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-300">Rentable</label>
  </div>

  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="Negotiable" type="checkbox" value="" name="Negotiable" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="Negotiable" className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-300">Negotiable</label>
  </div>

</div>
</div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Place Offer!</button>
    </form>
  </div>
</div>
           
    );
}