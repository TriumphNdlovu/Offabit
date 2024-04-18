import { createClient } from '@/utils/supabase/client';
import {Post} from '../app/Models/post';
import { addPost, getPostsByUser, getAlloffer, searchPostbyCategory } from '@/Repository/postRepo';


const  getCurrentUserID = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user!.id;
  }

const getUserByID = async (id: string) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('Users')
      .select('*')
      .eq('userId', id)
      .single();
    if (error) throw error;

    // console.log(data);
    return data;
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

export const getAllofferService = async () => {

  const posts = await getAlloffer();
  const postsWithUser = await Promise.all(posts.map(async (post) => {
    const user = await getUserByID(post.userId);
    return {...post, user};
  }
  ));

  return postsWithUser;
}

export const searchPostbyCategoryService = async (category: string) => {
  if(category === 'All categories') return getAllofferService();
  const posts = await searchPostbyCategory(category);
  return posts;
}