'use client'
import { deleteByPostIDService, getCurrentUserID, getPostbyPostIDService } from "@/Services/postService"
import { Post } from "@/app/Models/post";
import { get } from "http";
import { useEffect, useState } from "react";

export default function Viewoffer() {

    const [PostID, setPostID] = useState<string | null>(null);
    const [post, setPost] = useState<Post>();
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [isPostOwner, setIsPostOwner] = useState(false);

    useEffect(() => {
        const currentUrl = window.location.href;
        let PostID = currentUrl.split('?')[1];
        setPostID(PostID);

        if (PostID) {
             getPostbyPostIDService(PostID)
                .then((rpost: Post) => {
                    console.log(rpost);
                    setPost(rpost);
                    fetchData(rpost);
                })
                .catch(() => {
                    console.log("Error fetching post");
                    setLoading(false);
                });
        } else {
            console.log("Post ID is not found");
            setLoading(false);
        }
    }, []);

    const fetchData = (post: Post) => {
        PostOwner(post.userId)
            .then(result => {
                setIsPostOwner(result);
                setLoading(false);
            })
            .catch(() => {
                console.log("Error fetching data");
                setLoading(false);
            });
    };

    const PostOwner = (userID: string) => {
      console.log("")
        return getCurrentUserID()
            .then(id => id === userID)
            .catch(() => {
                console.log("Error fetching user ID");
                return false;
            });
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setPost({ ...post!, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        console.log("Updated Post:", post!);
    };

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    if (loading) {
        return <div>Loading...</div>;
    }
  function handleDelete(post:Post): void {
    deleteByPostIDService(post.PostId);
  }

    return post ? (
        // Inside the form component
<form className="flex px-5 border flex-col lex items-center justify-center" onSubmit={handleSubmit}>
  <div className="p-5 w-9/12 bg-sky-950">

  {isPostOwner ? 
  (
    <div>
      <button onClick={handleEdit} className="mb-4 justify-end">Edit</button>
      <button onClick={()=>handleDelete(post)} className="mb-4 justify-end">Delete</button>
    </div>
  
)
  : null}
    <div className="flex items-center justify-center w-full">
        {/* <h1 className="text-2xl font-medium text-white">{post?.user.name}</h1> */}
        {/* //Display the Post Image */}

        <h1 className="text-2xl font-medium text-white">{post?.title}</h1>
    </div>
    <div className="flex items-center justify-center w-full">
        <img className=" w-3/6 h-1/2 border box border-white  object-cover object-center" src={post?.image} alt="Product Image" />
    </div>
    <div className="grid gap-6 mb-6 md:grid-cols-2 text-white py-5">
      <div className="flex flex-col">
        <label htmlFor="Title" className="block mb-2 text-sm font-medium dark:text-white">Title</label>
        <input type="text" id="Title" name="title" disabled={!editMode} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" value={post!.title} onChange={handleChange} required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Description" className="block mb-2 text-sm font-medium dark:text-white">Description</label>
        <textarea id="Description" name="description" disabled={!editMode} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" value={post!.description} onChange={handleChange} required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Price" className="block mb-2 text-sm font-medium dark:text-white">Price</label>
        <input type="number" id="Price" name="price" disabled={!editMode} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" value={post!.price} onChange={handleChange} required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Location" className="block mb-2 text-sm font-medium dark:text-white">Location</label>
        <input type="text" id="Location" name="location" disabled={!editMode} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" value={post!.location} onChange={handleChange} required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Category" className="block mb-2 text-sm font-medium dark:text-white">Category</label>
        <select id="Category" name="category" disabled={!editMode} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={post!.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="Condition" className="block mb-2 text-sm font-medium dark:text-white">Condition</label>
        <select id="Condition" name="condition" disabled={!editMode} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={post!.condition} onChange={handleChange} required>
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>
      </div>
    </div>
    <div className="grid gap-6 mb-6 md:grid-cols-2 text-white py-5">
      <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input id="Rentable" type="checkbox" value="Rentable" name="rentable" disabled={!editMode} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="Rentable" className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-300">Rentable</label>
      </div>
      <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input id="Negotiable" type="checkbox" value="Negotiable" name="negotiable" disabled={!editMode} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="Negotiable" className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-300">Negotiable</label>
      </div>
    </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE Offer!</button>
</form>

      ) : (
        <div>Sorry There was a problem fetching your post</div>
      );
    }
