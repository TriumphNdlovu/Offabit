'use client'
import { Post } from './Models/post';
import getPostsmock from '../Services/mockservice';
import IPost from '../components/Post/page';
import { useEffect, useState } from 'react';
import { getAllofferService, searchPostbyCategoryService } from '@/Services/postService';

export default function Home() {

  const [allOffers, setallOffers] = useState<Post[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All categories"); 
  useEffect(() => {
    getAllofferService().then((posts: Post[]) => {
      // console.log(posts);
      setallOffers(posts);
    });
  }, []);

  function CategorySearch(arg0: string) {
    searchPostbyCategoryService(arg0).then((posts: Post[]) => {
      console.log(posts);
      setallOffers(posts);
    });
  }

  function searchByText(arg0: string) {
    
    setallOffers(allOffers.filter(post => post.title.toLowerCase().includes(arg0.toLowerCase())));
    
  }

  return (
    <div>
      <div className="flex justify-between w-screen px-5  bg-gray-900">
        <h1 className="title-font sm:text-4xl text-3xl text-center mb-2 font-medium text-white py-5">Your Offers</h1>
        <div className='items-centre w-1/2'>

          <form className="max-w-lg mx-auto py-5" 
            onSubmit=
            {
              (e) => {
              e.preventDefault(); 
              const searchInput = document.getElementById('search-dropdown') as HTMLInputElement;
              searchByText(searchInput.value);
             }
            }
          >
            <div className="flex">
              <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
              <button id="dropdown-button" onClick={() => setDropdownVisible(!dropdownVisible)} 
              className="relative z-10 inline-flex items-center justify-center w-full px-4 py-2 text-sm 
              font-medium text-gray-700 bg-white border border-gray-300 rounded-l-lg shadow-sm 
              dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white 
              dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                {selectedCategory} 
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M9.293 11.293a1 1 0 0 1 1.414 0L14 14.586V8a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.586l-3.293-3.293a1 1 0 0 1 1.414-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div id="dropdown" className={dropdownVisible ? "absolute z-20 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5" : "hidden"}>
                <ul className="py-1">
                  
                  <li>
                    <button onClick={() => { setSelectedCategory("All categories"); setDropdownVisible(false); CategorySearch("")}} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">All categories</button>
                  </li>
                  <li>
                    <button onClick={() => { setSelectedCategory("Books"); setDropdownVisible(false); CategorySearch("Books")}} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Books</button>
                  </li>
                  <li>
                    <button onClick={() => { setSelectedCategory("Electronics"); setDropdownVisible(false); CategorySearch("Electronics")}} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Electronics</button>
                  </li>
                  <li>
                    <button onClick={() => { setSelectedCategory("Furniture"); setDropdownVisible(false); CategorySearch("Furniture")}} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Furniture</button>
                  </li>
                  <li>
                    <button onClick={() => { setSelectedCategory("Clothing"); setDropdownVisible(false); CategorySearch("Clothing")}} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Clothing</button>
                  </li>
                  <li>
                    <button onClick={() => { setSelectedCategory("Other"); setDropdownVisible(false); CategorySearch("Other")}} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Other</button>
                  </li>

                </ul>
              </div>
              <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search products..." required />
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {allOffers.map((post: Post) => {
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
