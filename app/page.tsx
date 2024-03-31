import {Post} from './Models/post';
import getPostsmock from './Services/mockservice';
import IPost from '../components/Post/page';

export default function Home() {

  const allPosts: Post[] = [];

  getPostsmock().map((post: Post) => {
    allPosts.push(post);
  }
  );

  return (
    <main>
        {/* <div className=" flex justify-start">
          <input
            type="text"
            placeholder="Search for a job"
            className=""
          />
          <button className="">
            <img src="" alt="search" />
          </button>
        </div> */}
        <div className="flex justify-between">
          <h1 className="">All Posts</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 w-full">
          {allPosts.map((post: Post) => {
            return (
              <IPost key={post.id} post={post} />
            );
          })}
        </div>
    </main>
  );
}