import React, { useState, useEffect } from 'react';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          query {
            user(username: "kaleidonex") {
              publication {
                posts(page: 1) {
                  title
                  brief
                  slug
                  dateAdded
                  coverImage
                }
              }
            }
          }
        `;

        const response = await fetch('https://api.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        const blogPosts = data.data?.user?.publication?.posts || [];
        setPosts(blogPosts.slice(0, 3)); // Get latest 3 posts
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-4">
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold mb-4">Latest from Our Blog</h3>
      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post, index) => (
            <a
              key={index}
              href={`https://kaleidonex.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <article className="flex flex-col space-y-1">
                <h4 className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-400">
                  {formatDate(post.dateAdded)}
                </p>
              </article>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">No blog posts available</p>
      )}
      
      <a
        href="https://kaleidonex.hashnode.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-xs text-gray-400 hover:text-white transition-colors mt-2"
      >
        View all posts →
      </a>
    </div>
  );
};

export default BlogSection; 