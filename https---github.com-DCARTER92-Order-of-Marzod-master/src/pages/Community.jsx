import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [userId] = useState(localStorage.getItem('userId') || null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/api/posts');
    const allPosts = res.data;
    setPosts(allPosts);

    for (let post of allPosts) {
      fetchComments(post.id);
    }
  };

  const fetchComments = async (postId) => {
    const res = await axios.get(`http://localhost:5000/api/comments/${postId}`);
    setComments(prev => ({ ...prev, [postId]: res.data }));
  };

  const handlePost = async () => {
    if (!newPost.trim()) return;
    await axios.post('http://localhost:5000/api/posts', { userId, content: newPost });
    setNewPost('');
    fetchPosts();
  };

  const handleComment = async (postId) => {
    if (!newComment[postId]) return;
    await axios.post('http://localhost:5000/api/comments', {
      userId,
      postId,
      content: newComment[postId]
    });
    setNewComment(prev => ({ ...prev, [postId]: '' }));
    fetchComments(postId);
  };

  const vote = async (postId, type) => {
    await axios.post(`http://localhost:5000/api/posts/${postId}/vote`, { vote: type });
    fetchPosts();
  };

  return (
    <div className="text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"></div>

      <h1 className="text-4xl font-bold mb-16 text-center text-shadow-lg">Community</h1>

      <section className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">Share Your Thoughts</h2>
        <div className="space-y-4">
          <textarea
            className="w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none resize-none transition-all"
            rows="4"
            placeholder="Share your thoughts..."
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
          />
          <button 
            className="px-6 py-2 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </section>

      <section className="space-y-8">
        {posts.map(post => (
          <div key={post.id} className="bg-black/20 backdrop-blur-sm rounded-lg p-6 transition-all hover:bg-black/25">
            <div className="mb-4">
              <p className="font-semibold text-lg text-shadow-lg mb-2">{post.username}</p>
              <p className="text-lg leading-relaxed text-shadow-lg mb-4">{post.content}</p>
              <div className="flex gap-6">
                <button 
                  onClick={() => vote(post.id, 'up')}
                  className="flex items-center gap-2 text-shadow hover:text-blue-400 transition-colors"
                >
                  👍 <span>{post.upvotes}</span>
                </button>
                <button 
                  onClick={() => vote(post.id, 'down')}
                  className="flex items-center gap-2 text-shadow hover:text-red-400 transition-colors"
                >
                  👎 <span>{post.downvotes}</span>
                </button>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-4 text-shadow-lg">Comments</h4>
              <div className="space-y-4">
                {comments[post.id]?.map(comment => (
                  <div key={comment.id} className="border-t border-white/10 pt-3">
                    <p className="text-shadow-lg">
                      <strong className="text-blue-400">{comment.username}</strong>: {comment.content}
                    </p>
                  </div>
                ))}
                <div className="mt-4 space-y-2">
                  <textarea
                    className="w-full p-3 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none resize-none transition-all"
                    rows="2"
                    placeholder="Add a comment..."
                    value={newComment[post.id] || ''}
                    onChange={e => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                  />
                  <button 
                    onClick={() => handleComment(post.id)}
                    className="px-4 py-1 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
