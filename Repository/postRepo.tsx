'use server';
import {Post} from '../app/Models/post';
import { createClient } from "@/utils/supabase/server";



// add new post function
export const addPost = async (post: Post) : Promise<void> => 
    {
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
            deliveryFee: post.deliveryFee
        },
        ])
        .select()

        if (error) {
            console.log("There was an error adding the post to the database");
            throw error;
        }
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