import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Post from '../components/Post.jsx';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const fetchPosts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error :-', error);
      }
    };

    fetchPosts();
  }, []);

  const LastPost = currentPage * postsPerPage;
  const FirstPost = LastPost - postsPerPage;
  const currentPosts = posts.slice(FirstPost, LastPost);

  return (
    <div className="posts-body">
      <Header />
      
      <div className="board">
        <h1>My Fake Json Posts</h1>
        <div className="posts-container">
          {currentPosts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span> Page {currentPage} </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={LastPost >= posts.length}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Posts;
