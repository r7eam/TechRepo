import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Pagination, Box } from '@mui/material';
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
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <Box className="posts-body" sx={{ minHeight: '100vh', bgcolor: '#cdc3c3ff' }}>
      <Header />
      <Box className="board" sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 2 }}>
        <Typography variant="h4" align="center" color="#1976d2" fontWeight={700} gutterBottom>
          My Fake Json Posts
        </Typography>
        <Grid container spacing={3}>
          {currentPosts.map(post => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: '#222', color: '#fafafa', borderRadius: 2, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="#1976d2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="#fafafa">
                    {post.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
            color="standard"
            shape="rounded"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Posts;