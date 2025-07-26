import { useState, useEffect } from 'react';
import { Grid } from '@mui/material'; 
import Header from './Header.jsx';
import Footer from './Footer.jsx';


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

        {/* --- 2. MAKE CHANGES HERE --- */}
        <Grid container spacing={3}>
          {currentPosts.map(post => (
            <Grid item key={post.id} xs={12}>
              <div className="post">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </Grid>
          ))}
        </Grid>
        {/* --- END OF CHANGES --- */}
        
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