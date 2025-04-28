import Navbar from "@/components/NavBar";
import PostPreview from "@/components/PostsPreview";
import { FaSearch } from 'react-icons/fa';

import getPostMetadata from "@/utils/getPostMetadata.js";


const PostsPage = async ({ searchParams }) => {
  // Get search query from URL params
  const searchQuery = searchParams?.q || '';
  
  // Get posts statically
  const posts = getPostMetadata();

  // Filter posts based on search query
  const filteredPosts = searchQuery ? posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.toLowerCase().includes(searchQuery.toLowerCase())
  ) : posts;

  return (
    <div className="min-h-screen">
      <Navbar text="home" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form - Using traditional form for static search */}
        <div className="mb-8">
          <form className="relative max-w-md mx-auto">
            <input
              type="text"
              name="q"
              placeholder="Search posts..."
              defaultValue={searchQuery}
              className="w-full px-4 py-2 pl-10 pr-4 
                       rounded-lg border border-gray-300
                       shadow-sm focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 
                       bg-blue-600 text-white rounded-md
                       hover:bg-blue-700 transition-colors 
                       focus:outline-none focus:ring-2 
                       focus:ring-blue-500"
            >
              Search
            </button>
          </form>
        </div>

        {/* Posts Grid */}
        <div>
          <h1 className="text-3xl font-semibold mb-6 text-gray-800">
            {searchQuery ? 'Search Results' : 'All Posts'}
            {searchQuery && ` (${filteredPosts.length})`}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <PostPreview key={post.slug} {...post} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No posts found matching your search criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;