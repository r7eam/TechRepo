import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Pagination, Box, Button, ButtonGroup } from '@mui/material';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Posts() {
  const [activeTab, setActiveTab] = useState('posts');
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchPosts();
    fetchTodos();
    fetchUsers();
  }, []);

  // Calculate pagination for current active tab
  const getLastItem = () => currentPage * itemsPerPage;
  const getFirstItem = () => getLastItem() - itemsPerPage;
  
  // Get current items based on active tab
  const getCurrentItems = () => {
    if (activeTab === 'posts') {
      return posts.slice(getFirstItem(), getLastItem());
    } else if (activeTab === 'todos') {
      return todos.slice(getFirstItem(), getLastItem());
    } else {
      return users;
    }
  };
  
  // Calculate total pages based on active tab
  const getTotalPages = () => {
    if (activeTab === 'posts') {
      return Math.ceil(posts.length / itemsPerPage);
    } else if (activeTab === 'todos') {
      return Math.ceil(todos.length / itemsPerPage);
    } else {
      return Math.ceil(users.length / itemsPerPage);
    }
  };

  // Render different content based on active tab
  const renderContent = () => {
    const currentItems = getCurrentItems();
    
    if (activeTab === 'posts') {
      return (
        <Grid container spacing={3}>
          {currentItems.map(post => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: '#222', color: '#fafafa', borderRadius: 2, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="#1976d2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="#fafafa">
                    {post.body}
                  </Typography>
                  <br />
                  <Typography variant="body2" color="#740808ff">
                    Post ID: {post.id}
                  
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    } else if (activeTab === 'todos') {
      return (
        <Grid container spacing={3}>
          {currentItems.map(todo => (
            <Grid item key={todo.id} xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: '#222', color: '#fafafa', borderRadius: 2, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" color={todo.completed ? "#4caf50" : "#f44336"} gutterBottom>
                    {todo.completed ? "Completed" : "Pending"}
                  </Typography>
                  <Typography variant="body1" color="#fafafa">
                    {todo.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return (
        <Grid container spacing={3}>
          {currentItems.map(user => (
            <Grid item key={user.id} xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: '#222', color: '#fafafa', borderRadius: 2, boxShadow: 2, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="#1976d2" gutterBottom>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="#fafafa" gutterBottom>
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body2" color="#fafafa" gutterBottom>
                    Phone: {user.phone}
                  </Typography>
                  <Typography variant="body2" color="#fafafa">
                    Website: {user.website}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  return (
    <Box className="posts-body" sx={{ minHeight: '100vh', bgcolor: '#ffffffff' }}>
      <Header />
      <Box className="board" sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 2 }}>
        <Typography variant="h4" align="center" color="#1976d2" fontWeight={700} gutterBottom>
          API Task
        </Typography>
        
        {/* Tab navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <ButtonGroup 
            variant="contained" 
            aria-label="API data navigation"
            sx={{ 
              backgroundColor: '#222',
              borderRadius: 2,
              overflow: 'hidden',
              '& .MuiButton-root': {
                border: 'none',
                borderRadius: 0,
                px: 4
              }
            }}
          >
            <Button 
              onClick={() => setActiveTab('posts')} 
              sx={{ 
                bgcolor: activeTab === 'posts' ? '#1976d2' : '#222',
                color: '#fafafa',
                '&:hover': { bgcolor: activeTab === 'posts' ? '#1976d2' : '#444' }
              }}
            >
              Posts
            </Button>
            <Button 
              onClick={() => setActiveTab('todos')} 
              sx={{ 
                bgcolor: activeTab === 'todos' ? '#1976d2' : '#222',
                color: '#fafafa',
                '&:hover': { bgcolor: activeTab === 'todos' ? '#1976d2' : '#444' }
              }}
            >
              ToDos
            </Button>
            <Button 
              onClick={() => setActiveTab('users')} 
              sx={{ 
                bgcolor: activeTab === 'users' ? '#1976d2' : '#222',
                color: '#fafafa',
                '&:hover': { bgcolor: activeTab === 'users' ? '#1976d2' : '#444' }
              }}
            >
              Users
            </Button>
          </ButtonGroup>
        </Box>
        
        {/* Render content based on active tab */}
        {renderContent()}
        
        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={getTotalPages()}
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
            color="primary"
            shape="rounded"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Posts;