'use client'
import { getPostbyPostIDService } from "@/Services/postService"
import { Post } from "@/app/Models/post";
import { useEffect, useState } from "react";
export default function Viewoffer() 
{

    
    const [PostID, setPostID] = useState<string | null>(null);
    const [post, setPost] = useState<Post>();
    useEffect(() => {
        const currentUrl = window.location.href;
        let PostID = currentUrl.split('?')[1];
        //remove the last character
        PostID = PostID.substring(0, PostID.length - 1);
        setPostID(PostID);

        if (PostID) {
            getPostbyPostIDService(PostID).then((post: Post) => {
                setPost(post);
            });
        }
    }, []);

    return (
        <div>
            <div className="flex justify-between bg-blue-500 w-screen px-5">
                <h1 className="text-xl flex justify-start" >Offer</h1>
                <div> Title : {post?.title}</div>
                <h2> Description : {post?.description}</h2>
                <h3> Price : {post?.price}</h3>
                <h3> Location : {post?.location}</h3>
                <h3> Category : {post?.category}</h3>
                <h3> Condition : {post?.condition}</h3>
                <h3> Delivery Fee : {post?.deliveryFee}</h3>
                <h3> Delivery Time : {post?.delivery}</h3>
                <h3> Negotiable : {post?.negotiable}</h3>
                <h3> Post Date : {post?.postedAt}</h3>
                <h3> User ID : {post?.userId}</h3>
                <h3> Contact : {post?.contact}</h3>
                <h3> Status : {post?.status}</h3>
                <h3> Sale Type : {post?.saleType}</h3>
                <h3> Image : {post?.image}</h3>
        </div>
        </div>
    )
}
