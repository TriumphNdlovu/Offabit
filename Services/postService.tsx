import { createClient } from '@/utils/supabase/client';
import {Post} from '../app/Models/post';
import { addPost, getPostsByUser, getAlloffer, searchPostbyCategory } from '@/Repository/postRepo';


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
export const addPostService = async (post: Post, image: File) => {
  const supabase = createClient();
  const imageData = {
      name: image.name,
      data: image
  };

   const PostID = await addPost(post);

      console.log(image.name)
      console.log(image)
      const currentUserID = await getCurrentUserID();
      console.log(`${currentUserID}/PostImages/${image.name}`)

      const { data: imageUploadData, error: imageUploadError } = await supabase.storage
        .from('mediacontent')
        .upload(`${currentUserID}/PostImages/${PostID}+${image.name}`, image, {
          contentType: imageData.data.type,
        });

       if (imageUploadError) {
        console.error('Error uploading image:', imageUploadError.message);
        return; 
      }

      console.log(imageUploadData);


};


// get all posts function
export const getPostsService = async () => 
{
    const userId = await getCurrentUserID();
    const posts = await getPostsByUser(userId);

    const postsWithUser = await Promise.all(posts.map(async (post) => {
      const user = await getUserByID(post.userId);
      return {...post, user};
    }
    ));
    return postsWithUser;
}


export const getAllofferService = async () => {

  const posts = await getAlloffer();
  const postsWithUser = await Promise.all(posts.map(async (post) => {
    const user = await getUserByID(post.userId);
    return {
      ...post, user
    
    };
  }
  ));

  return postsWithUser;
}

export const searchPostbyCategoryService = async (category: string) => {
  if(category === 'All categories') return getAllofferService();
  const posts = await searchPostbyCategory(category);
  return posts;
}