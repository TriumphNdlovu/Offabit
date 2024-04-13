import {Post} from '../app/Models/post';
import { addPost } from '@/Repository/postRepo';


// add new post function
export const addPostService = async (post: Post) => 
{
    addPost(post);
};