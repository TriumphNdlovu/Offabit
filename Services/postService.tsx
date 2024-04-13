import { createClient } from '@/utils/supabase/client';
import {Post} from '../app/Models/post';
import { addPost, getPostsByUser } from '@/Repository/postRepo';


const  getCurrentUserID = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user!.id;
  }

// add new post function
export const addPostService = async (post: Post) => 
{
    addPost(post);
};

// get all posts function
export const getPostsService = async () => 
{
    const userId = await getCurrentUserID();
    const posts = await getPostsByUser(userId);
    posts.sort((a, b) => {
        return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
    }
    );
    return posts;
};