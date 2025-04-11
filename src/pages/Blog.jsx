import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace "YOUR_USERNAME" with your actual Hashnode username
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
                  contentMarkdown
                  readTime
                  tags {
                    name
                    slug
                  }
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
        const blogPosts = data.data?.user?.publication?.posts;
        
        if (!blogPosts) {
          throw new Error('No posts found. Make sure your username is correct.');
        }
        
        setPosts(blogPosts);
        setError(null);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="mb-12 animate-pulse">
                <div className="aspect-video bg-gray-700 rounded-xl mb-4"></div>
                <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white/5 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-300 mb-6">{error}</p>
            <p className="text-gray-400">
              Please make sure you have:
              <br />1. Created a Hashnode account
              <br />2. Started a blog
              <br />3. Published some articles
              <br />4. Updated the username in the code
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay updated with our latest insights, tutorials, and tech news
          </motion.p>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center bg-white/5 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">No Posts Yet</h2>
              <p className="text-gray-300">
                Start writing your first blog post on Hashnode to see it appear here!
              </p>
            </motion.div>
          ) : (
            posts.map((post, index) => (
              <motion.article 
                key={post.slug}
                className="mb-16 bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {post.coverImage && (
                  <img 
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full aspect-video object-cover rounded-xl mb-6 hover:opacity-90 transition-opacity"
                  />
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map(tag => (
                        <span 
                          key={tag.name}
                          className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-purple-300">
                        {post.readTime} min read
                      </span>
                      <time className="text-sm text-gray-400">
                        {formatDate(post.dateAdded)}
                      </time>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
                    <a 
                      href={`https://kaleidonex.hashnode.dev/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h2>

                  <p className="text-gray-300 line-clamp-3">
                    {post.brief}
                  </p>

                  <a
                    href={`https://kaleidonex.hashnode.dev/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Read more
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog; 