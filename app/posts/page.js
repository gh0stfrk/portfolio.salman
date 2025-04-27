'use client';
import { useState, useEffect } from 'react';
import Navbar from "@/components/NavBar";
import PostPreview from "@/components/PostsPreview";

import { FaSearch } from 'react-icons/fa';

const PostsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar text="home" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 
                         rounded-lg border border-gray-200
                         focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Posts Grid */}
        <div>
          <h1 className="text-3xl font-semibold mb-6">
            {searchQuery ? 'Search Results' : 'All Posts'}
            {searchQuery && ` (${filteredPosts.length})`}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-full text-center py-10">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-blue-500" />
              </div>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <PostPreview key={idx} {...post} />
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