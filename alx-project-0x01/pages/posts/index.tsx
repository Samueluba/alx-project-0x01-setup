import React from "react";

const PostsPage: React.FC = () => {
  return <div className="p-8">Posts Page</div>;
};

export default PostsPage;

import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home;

import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard title={title} body={body} userId={userId} id={id} key={key} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: PostProps[] = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts;
