'use server';
import {v4} from 'uuid';
import {Post} from '../app/Models/post';
import { createClient } from "@/utils/supabase/server";



const  getCurrentUserID = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('User not found');
    }
    return user!.id;
  }

// add new post function
export const addPost = async (post: Post, image: {name: string,data: File}) : Promise<void> => 
    {
        const uniquePostID = v4();
        post.PostId = uniquePostID; 
        console.log("I added the new post to the database");
        const supabase = createClient();
        const { data, error } = await supabase
        .from('Offers')
        .insert([
        {
            title: post.title,
            description: post.description,
            saleType: post.saleType,
            price: post.price,
            image: post.image,
            location: post.location,
            postedAt: (new Date()).toISOString(),  
            contact: post.contact,
            category: post.category,
            status: post.status,
            negotiable: post.negotiable,
            condition: post.condition,
            delivery: post.delivery,
            deliveryFee: post.deliveryFee,
            PostId: post.PostId,
        },
        ])
        .select()

        // upload image blob to sup

        // const contentType = 'image/png';

        // console.log(image.name)
        // console.log(image)
        // console.log(`public/${uniquePostID}/${image.name}`)

        // if (data && data.length > 0) {
        //     const { data: imageUploadData, error: imageUploadError } = await supabase.storage
        //         .from('mediacontent')
        //         .upload(`public/${uniquePostID}/${image.name}`, data[0].Image, {
        //             contentType: contentType,
        //         });
        //     console.log(imageUploadData);

        //     if (error) {
        //         console.log("There was an error adding the post to the database");
        //         throw error;
        //     }
        // } else {
        //     console.log("No data found in the database");
        // }
};

// get posts by current user
export const getPostsByUser = async (userId: string) : Promise<Post[]> => 
{

    const supabase = createClient();
    const { data, error } = await supabase
    .from('Offers')
    .select('*')
    .eq('userId', userId)
    if (error) {
        console.log("There was an error fetching the posts from the database");
        throw error;
    }

    if (!data) {
        console.log("No data found in the database");
        return [];
    }
    return data;
};

// get post by id
export const searchPostbyCategory = async (category: string) : Promise<Post[]> =>
{
    const supabase = createClient();
    const { data, error } = await supabase
    .from('Offers')
    .select('*')
    .eq('category', category)
    if (error) {
        console.log("There was an error fetching the posts from the database");
        throw error;
    }

    if (!data) {
        console.log("No data found in the database");
        return [];
    }
    return data;
}

// get all offers
export const getAlloffer = async () : Promise<Post[]> =>
{
    // 
    const supabase = createClient();
    const { data, error } = await supabase
    .from('Offers')
    .select('*')
    .range(0, 9);
    console.log(data);
    if (error) {
        console.log("There was an error fetching the posts from the database");
        throw error;
    }
    if (!data) {
        console.log("No data found in the database");
        return [];
    }
    return data;
}


