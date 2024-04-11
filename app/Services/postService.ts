'use server';
import {Post} from '../Models/post';
import { createClient } from "@/utils/supabase/server";



// add new post function
export const addPost = async (post: Post) => 
{
    const supabase = createClient();
    const { error } = await supabase
    .from('Offers')
    .insert([
    {
        title: post.title,
        description: post.description,
        saleType: post.saleType,
        price: post.price,
        image: post.image,
        location: post.location,
        postedAt: post.postedAt,
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

};