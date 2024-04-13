import {Post} from './Models/post';
import getPostsmock from '../Services/mockservice';
import IPost from '../components/Post/page';


export default function Home() {
  
  const allPosts: Post[] = [];

  getPostsmock().map((post: Post) => {
    allPosts.push(post);
  }
  );

  return (
    
 
    <div>
<div className="text-gray-400 bg-gray-900 body-font">
      <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 font-medium text-white py-5">All Offers</h1>
                <div className="container px-5 mx-auto">
                  <div className="flex flex-wrap -m-4">
                      {allPosts.map((post: Post) => {
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