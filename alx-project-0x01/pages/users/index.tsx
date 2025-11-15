import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>List of posts will go here.</p>
      </main>
    </div>
  )
}

export default PostsPage;
